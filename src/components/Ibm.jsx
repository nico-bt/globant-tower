import { useGLTF } from "@react-three/drei"

const Ibm = ({ position = [36, 0, -18] }) => {
  const model = useGLTF("/model/ibm/scene.gltf")

  return <primitive object={model.scene} scale={0.33} position={position} rotation={[0, 1.5, 0]} />
}

export default Ibm
