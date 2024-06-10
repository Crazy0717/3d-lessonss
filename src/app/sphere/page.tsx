"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import gsap from "gsap"
import { useRef, useState } from "react"
import { Mesh } from "three"

const SpherePage = () => {
  return (
    <Canvas className="canvas-parent">
      <directionalLight position={[0, 0, 2]} />
      <Sphere />
    </Canvas>
  )
}

export default SpherePage

const Sphere = () => {
  const boxRef = useRef<Mesh>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  let speed = isHovered ? 1.4 : 0.4

  const handleClick = () => {
    if (boxRef.current) {
      gsap.to(boxRef.current.scale, {
        x: isClicked ? 1 : 1.5,
        y: isClicked ? 1 : 1.5,
        z: isClicked ? 1 : 1.5,
        duration: 0.2,
        // yoyo: true,
        // repeat: 10,
        onComplete: () => setIsClicked(!isClicked), // Toggle the state after animation
      })
    }
  }
  useFrame((state, delta) => {
    if (boxRef.current) {
      boxRef.current.rotation.x += delta * speed
      boxRef.current.rotation.y += delta * speed
    }
  })
  console.log(boxRef)
  return (
    <mesh
      ref={boxRef}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      onClick={handleClick}
      scale={isClicked ? 1.5 : 1}
    >
      <sphereGeometry args={[1.5, 30, 30]} />
      <meshStandardMaterial
        color={isHovered ? "white" : "lightgreen"}
        wireframe
      />
    </mesh>
  )
}
