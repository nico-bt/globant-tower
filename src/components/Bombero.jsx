import { useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"

const Bombero = ({ type = "dynamic", rotation = [0, 0.75, 0], position = [-4, 0, -3] }) => {
  const model = useGLTF("/model/bombero/scene.gltf")

  return (
    <RigidBody colliders="hull" rotation={rotation} position={position} type={type}>
      <primitive object={model.scene.clone()} scale={0.01} />
    </RigidBody>
  )
}

export default Bombero
