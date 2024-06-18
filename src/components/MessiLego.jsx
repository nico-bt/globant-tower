import { Image } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"

function MessiLego() {
  return (
    <>
      <RigidBody type="fixed" position={[-7, 0, 14]} name="Messi">
        <mesh>
          <boxGeometry args={[0.6, 0.025, 0.5]} />
          <meshStandardMaterial color={"black"} />
        </mesh>
      </RigidBody>

      <mesh position={[-7, 0.5, 14]}>
        <Image url="/messiLego.png" toneMapped={false} scale={[0.5, 1]} transparent />
      </mesh>
    </>
  )
}

export default MessiLego
