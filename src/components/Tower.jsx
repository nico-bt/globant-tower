import { useGLTF } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"

const Tower = () => {
  const model = useGLTF("/model/tower/scene.gltf")

  return (
    <RigidBody type="fixed" colliders="hull" position={[0, 0, -19]}>
      <primitive object={model.scene} scale={0.28} />
    </RigidBody>
  )
}

export default Tower
