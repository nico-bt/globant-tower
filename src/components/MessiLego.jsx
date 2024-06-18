import { Image, Text } from "@react-three/drei"
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

      <Text
        scale={0.6}
        position={[-7.05, 0, 14.25]}
        anchorX={"center"}
        anchorY={"center"}
        rotation={[-1.5, 0, 0]}
        color={"black"}
      >
        ⇧
      </Text>
    </>
  )
}

export default MessiLego
