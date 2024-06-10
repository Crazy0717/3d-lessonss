"use client"
import { SpotLight } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import { Mesh } from "three"

const SpotLightPage = () => {
  return (
    <Canvas className="canvas-parent">
      <SpotLight
        position={[0, 3, 0]}
        castShadow
        distance={5}
        angle={0.3}
        attenuation={10}
        anglePower={4}
        intensity={10}
      />
      <Cube />
    </Canvas>
  )
}

export default SpotLightPage

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
      <meshStandardMaterial color={"yellow"} />
    </mesh>
  )
}
