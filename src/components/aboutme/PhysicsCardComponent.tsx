'use client'
import * as THREE from 'three'
import { useRef, useState } from 'react'
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber'
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint, RapierRigidBody } from '@react-three/rapier'
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'
import { type ThreeElement } from '@react-three/fiber'
extend({ MeshLineGeometry, MeshLineMaterial })
declare module '@react-three/fiber' {
  interface ThreeElements {
    meshLineGeometry: ThreeElement<typeof MeshLineGeometry>
    meshLineMaterial: ThreeElement<typeof MeshLineMaterial>
  }
}
export default function PhysicsCardComponent() {
  return (
    <div>
      <Canvas>
        <Physics>
          <Band />
        </Physics>
      </Canvas>
    </div>
  )
}

function Band() {
  const band = useRef<THREE.Mesh>(null)

  const fixed = useRef<RapierRigidBody>(null!)
  const j1 = useRef<RapierRigidBody>(null!)
  const j2 = useRef<RapierRigidBody>(null!)
  const j3 = useRef<RapierRigidBody>(null!)

  const { width, height } = useThree((state) => state.size)
  const [curve] = useState(() => new THREE.CatmullRomCurve3([
    new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()
  ]))

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1])
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1])
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1])

  useFrame(() => {
    if (fixed.current && j1.current && j2.current && j3.current && band.current) {
      curve.points[0].copy(j3.current.translation())
      curve.points[1].copy(j2.current.translation())
      curve.points[2].copy(j1.current.translation())
      curve.points[3].copy(fixed.current.translation());
      (band.current.geometry as MeshLineGeometry).setPoints(curve.getPoints(32))
    }
  })

  return (<>
    <RigidBody ref={fixed} type='fixed' />
    <RigidBody position={[0.5, 0, 0]} ref={j1}>
      <BallCollider args={[0.1]} />
    </RigidBody>
    <RigidBody position={[1, 0, 0]} ref={j2}>
      <BallCollider args={[0.1]} />
    </RigidBody>
    <RigidBody position={[1.5, 0, 0]} ref={j3}>
      <BallCollider args={[0.1]} />
    </RigidBody>
    <mesh ref={band}>
      <meshLineGeometry />
      <meshLineMaterial color="white" resolution={[width, height]} lineWidth={1} args={[{ resolution: new THREE.Vector2(width, height) }]} />
    </mesh>
  </>
  )
}
