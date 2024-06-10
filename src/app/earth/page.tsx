"use client"
import React, { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import { DoubleSide, Mesh, TextureLoader } from "three"

const Earth = () => {
  const earthRef = useRef<Mesh>(null)
  const cloudRef = useRef<Mesh>(null)

  useFrame((state, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta / 5
    }
    if (cloudRef.current) {
      cloudRef.current.rotation.y += delta / 2.5
    }
  })

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 60, 60]} />
        <meshStandardMaterial
          map={new TextureLoader().load("/images/earth1.jpg")}
        />
      </mesh>
      <mesh ref={cloudRef}>
        <sphereGeometry args={[1.005, 60, 60]} />
        <meshStandardMaterial
          map={new TextureLoader().load("/images/cloudsMap.jpg")}
          opacity={0.3}
          transparent
          depthWrite
          side={DoubleSide}
        />
      </mesh>
      <Stars />
      <OrbitControls maxDistance={10} minDistance={1.2} />
    </>
  )
}

const EarthCanvas = () => {
  return (
    <Canvas className="canvas-parent">
      <Earth />
    </Canvas>
  )
}

export default EarthCanvas
