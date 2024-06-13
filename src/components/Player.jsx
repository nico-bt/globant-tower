import { useKeyboardControls, useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { RigidBody, useRapier } from "@react-three/rapier"
import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

function Player() {
  const { rapier, world } = useRapier()
  const [suscribeKeys, getKeys] = useKeyboardControls()
  const playerRef = useRef(new THREE.Vector3())

  // For lerping
  const [smoothedCameraPosition] = useState(new THREE.Vector3(0, 0, 200))
  const [smoothedCameraTarget] = useState(new THREE.Vector3())

  useFrame((state, delta) => {
    // Arrow moves - controls
    //   -------------------------
    const keys = getKeys()
    const impulse = { x: 0, y: 0, z: 0 }

    if (keys.forward) {
      impulse.z = -0.015 * delta
    }
    if (keys.back) {
      impulse.z = 0.015 * delta
    }
    if (keys.left) {
      impulse.x = -0.015 * delta
    }
    if (keys.right) {
      impulse.x = 0.015 * delta
    }

    // @ts-ignore
    const playerPosition = playerRef.current.translation()

    if (playerPosition.y < -6) {
      // Reset Position and velocities (Linear & Angular)
      playerRef.current.setLinvel({ x: 0, y: 0, z: 0 })
      playerRef.current.setAngvel({ x: 0, y: 0, z: 0 })
      playerRef.current.setTranslation({ x: 0, y: 6, z: 0 })
    }

    playerRef.current?.applyImpulse(impulse, true)

    // Camera
    // --------------------
    // console.log(playerPosition)
    // console.log(state.camera.position)

    const cameraPosition = new THREE.Vector3()
    cameraPosition.copy(playerPosition)
    cameraPosition.z += 5
    cameraPosition.y += 0.5

    // Adonde apunta la camara
    const cameraTarget = new THREE.Vector3()
    cameraTarget.copy(playerPosition)
    cameraTarget.y += 1.25

    // lerp
    smoothedCameraPosition.lerp(cameraPosition, 5 * delta)
    smoothedCameraTarget.lerp(cameraTarget, 5 * delta)

    // update camera
    state.camera.position.copy(smoothedCameraPosition)
    state.camera.lookAt(smoothedCameraTarget)
  })

  //   Jump with spacebar
  //   -------------------------
  const jump = () => {
    const origin = playerRef.current?.translation()
    origin.y -= 0.11 //Diametro ball
    const direction = { x: 0, y: -1, z: 0 }

    // To avoid jumping when ball is in the air. Raycast to floor
    const ray = new rapier.Ray(origin, direction)
    const hit = world.castRay(ray, 10, true)

    if (hit?.toi < 0.15) {
      playerRef.current?.applyImpulse({ x: 0, y: 0.022, z: 0 })
    }
  }

  useEffect(() => {
    const unsuscribeJump = suscribeKeys(
      (state) => state.jump,
      (pressOnce) => {
        if (pressOnce) {
          jump()
        }
      }
    )
    return () => unsuscribeJump()
  }, [])

  const propsTexture = useTexture({ map: "/messi.jpg" })

  return (
    <RigidBody
      ref={playerRef}
      position={[0, 22, 1]}
      colliders="ball"
      restitution={0.2}
      friction={1}
      linearDamping={0.5}
      angularDamping={0.5}
    >
      <mesh castShadow>
        <sphereGeometry args={[0.1]} />
        <meshStandardMaterial {...propsTexture} />
      </mesh>
    </RigidBody>
  )
}

export default Player
