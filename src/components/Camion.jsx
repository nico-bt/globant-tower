import { useAnimations, useGLTF } from "@react-three/drei"
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier"
import { useEffect } from "react"

const Camion = ({ rotation = [0, 1.2, 0], position = [-8.5, -0.1, -5] }) => {
  const model = useGLTF("/model/camion/scene.gltf")

  return (
    <RigidBody type="fixed" colliders={"hull"} rotation={rotation} position={position}>
      <primitive object={model.scene} scale={0.35} />
    </RigidBody>
  )
}

export default Camion
