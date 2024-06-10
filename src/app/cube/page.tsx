"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Mesh } from "three"

const CubePage = () => {
  return (
    <Canvas className="canvas-parent">
      <directionalLight position={[0, 0, 2]} />
      <Cube />
    </Canvas>
  )
}

export default CubePage

const Cube = () => {
  const boxRef = useRef<Mesh>(null)

  useFrame((state, delta) => {
    if (boxRef.current) {
      boxRef.current.rotation.x += delta
      boxRef.current.rotation.y += delta
    }
  })

  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  )
}
