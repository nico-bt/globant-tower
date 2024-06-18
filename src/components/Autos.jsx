import { useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"

const Autos = ({ rotation = [0, -0.95, 0], position = [6.8, -0.1, -5] }) => {
  const model = useGLTF("/model/autos/scene.gltf")

  return (
    <RigidBody type="fixed" colliders={"hull"} rotation={rotation} position={position}>
      <primitive object={model.scene} scale={0.85} />
    </RigidBody>
  )
}

export default Autos
