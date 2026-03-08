'use client'
import * as THREE from 'three'
import { useRef, useState , useEffect} from 'react'
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber'
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint, RapierRigidBody } from '@react-three/rapier'
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'
import { type ThreeElement } from '@react-three/fiber'

import { Environment, useGLTF, useTexture, Lightformer } from '@react-three/drei'
import { hover } from 'motion'


extend({ MeshLineGeometry, MeshLineMaterial })
useGLTF.preload('/udondevcard.glb')
useTexture.preload('/namecard.png')


declare module '@react-three/fiber' {
  interface ThreeElements {
    meshLineGeometry: ThreeElement<typeof MeshLineGeometry>
    meshLineMaterial: ThreeElement<typeof MeshLineMaterial>
  }
}
export default function PhysicsCardComponent() {
  return (
    <div className='h-200'>
      <Canvas camera={{ position: [0, 0, 13], fov: 25 }}>
        <ambientLight intensity={1.5} />
        <Environment preset='city' />
        <Physics debug={true}>
          <Band />
        </Physics>
      </Canvas>
    </div>
  )
}

function Band() {
  const band = useRef<THREE.Mesh>(null)

  const cardTexture = useTexture('/namecard.png')
  const { nodes, materials } = useGLTF('/udondevcard.glb')
  console.log('down is nodes')
  console.log(nodes)
  console.log('===========')
  console.log(materials)
  console.log('===========')

  const fixed = useRef<RapierRigidBody>(null!)
  const j1 = useRef<RapierRigidBody>(null!)
  const j2 = useRef<RapierRigidBody>(null!)
  const j3 = useRef<RapierRigidBody>(null!)

  const card = useRef<RapierRigidBody>(null!)
  const vec = new THREE.Vector3
  const ang = new THREE.Vector3
  const rot = new THREE.Vector3
  const dir = new THREE.Vector3
  const [dragged, drag] = useState<THREE.Vector3 | false>(false)
  const [ hovered, hover] = useState(false)

  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.25, 0]])


  const { width, height } = useThree((state) => state.size)
  const [curve] = useState(() => new THREE.CatmullRomCurve3([
    new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()
  ]))

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1])
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1])
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1])

    useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab'
      return () => void (document.body.style.cursor = 'auto')
    }
  }, [hovered, dragged])

  useFrame((state) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera)
      dir.copy(vec).sub(state.camera.position).normalize()
      vec.add(dir.multiplyScalar(state.camera.position.length()))
      card.current.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z })
    }
    if (fixed.current && j1.current && j2.current && j3.current && band.current) {
      curve.points[0].copy(j3.current.translation())
      curve.points[1].copy(j2.current.translation())
      curve.points[2].copy(j1.current.translation())
      curve.points[3].copy(fixed.current.translation());
      (band.current.geometry as MeshLineGeometry).setPoints(curve.getPoints(32))

      ang.copy(card.current.angvel())
      rot.copy(card.current.rotation())
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z }, true)
    }
  })

  return (<>
    <group position={[0, 4, 0]}>
      <RigidBody ref={fixed} type='fixed' angularDamping={2} linearDamping={2} />
      <RigidBody position={[0.5, 0, 0]} ref={j1} angularDamping={2} linearDamping={2}>
        <BallCollider args={[0.1]} />
      </RigidBody>
      <RigidBody position={[1, 0, 0]} ref={j2} angularDamping={2} linearDamping={2}>
        <BallCollider args={[0.1]} />
      </RigidBody>
      <RigidBody position={[1.5, 0, 0]} ref={j3} angularDamping={2} linearDamping={2}>
        <BallCollider args={[0.1]} />
      </RigidBody>
      <RigidBody ref={card} type={dragged ? 'kinematicPosition' : 'dynamic'} angularDamping={2} linearDamping={2}>
        <CuboidCollider args={[0.8, 1.125, 0.01]} />
        <mesh
          onPointerOver={() => hover(true)}
          onPointerOut={() => hover(false)}
          onPointerUp={(e) => {
            (e.target as HTMLElement).releasePointerCapture(e.pointerId)
            drag(false)
          }}
          onPointerDown={(e) => drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())))}
        >
          <planeGeometry args={[0.8 * 2, 1.125 * 2]} />
          <meshStandardMaterial
            map={cardTexture}
            map-colorSpace={THREE.SRGBColorSpace}
            metalness={0.7}
            roughness={0.1}
            color='white' side={THREE.DoubleSide} />
        </mesh>
      </RigidBody>

    </group>
    <mesh ref={band}>
      <meshLineGeometry />
      <meshLineMaterial color="black" resolution={[width, height]} lineWidth={1} args={[{ resolution: new THREE.Vector2(width, height) }]} />
    </mesh>
  </>
  )
}
