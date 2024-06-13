import { useAnimations, useGLTF } from "@react-three/drei"
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier"
import { useEffect } from "react"

const Batman = ({ type = "fixed", rotation = [0, 0.75, 0], position = [0, 0, 0] }) => {
  const model = useGLTF("/model/batman/scene.gltf")

  return (
    <RigidBody colliders="hull" rotation={rotation} position={position} type={type}>
      <primitive object={model.scene} scale={0.01} />
    </RigidBody>
  )
}

export default Batman
