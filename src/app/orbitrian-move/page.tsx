"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Mesh } from "three"

const OrbitrianMove = () => {
  return (
    <Canvas className="canvas-parent">
      <directionalLight position={[0, 0, 2]} />
      <Cube />
    </Canvas>
  )
}

export default OrbitrianMove

const Cube = () => {
  const boxRef = useRef<Mesh>(null)

  useFrame((state, delta) => {
    if (boxRef.current) {
      boxRef.current.rotation.x += delta
      boxRef.current.rotation.y += delta
      boxRef.current.position.y = Math.cos(state.clock.elapsedTime) * 2
      boxRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2
      // boxRef.current.position.z = Math.cos(state.clock.elapsedTime) * 2
    }
  })

  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"yellow"} />
    </mesh>
  )
}
