import { useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"

const Batman = ({ type = "fixed", rotation = [0, 0.75, 0], position = [0, 0, 0] }) => {
  const model = useGLTF("/model/batman/scene.gltf")

  return (
    <RigidBody colliders="hull" rotation={rotation} position={position} type={type}>
      <primitive object={model.scene} scale={0.01} />
    </RigidBody>
  )
}

export default Batman
