import { useAnimations, useGLTF } from "@react-three/drei"
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier"
import { useEffect } from "react"

const Bombero = ({ type = "dynamic", rotation = [0, 0.75, 0], position = [-4, 0, -3] }) => {
  const model = useGLTF("/model/bombero/scene.gltf")

  return (
    <RigidBody colliders="hull" rotation={rotation} position={position} type={type}>
      <primitive object={model.scene.clone()} scale={0.01} />
    </RigidBody>
  )
}

export default Bombero
