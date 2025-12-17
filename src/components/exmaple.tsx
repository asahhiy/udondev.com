'use client'
import { useState } from "react"
type Props = {
  name: string,
  birthday: number
}

export default function Example({ name, birthday }: Props) {
  const [nownumber, setNownumber] = useState<number>(234)

  const oneplus = () => {
    setNownumber((prev) => prev + 1)
  }

  return (
    <div>
      <button onClick={oneplus}>現在の数:{nownumber}</button>
      {name === 'asahi' ? (
        <div>trueです</div>
      ) : (
        <div>falseです</div>
      )}
    </div>
  )
}

