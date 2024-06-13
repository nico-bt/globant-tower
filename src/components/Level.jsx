import { Image, Text } from "@react-three/drei"
import { CuboidCollider } from "@react-three/rapier"
import * as THREE from "three"
THREE.ColorManagement.legacyMode = false

function Title({ position = [0, 0.3, 0] }) {
  return (
    <group position={position}>
      <Text
        fontWeight={800}
        letterSpacing={0.03}
        scale={0.6}
        position={[0, 1.3, 1.5]}
        maxWidth={0.25}
        lineHeight={0.9}
        castShadow
      >
        Escala la Torre Globant
        <meshBasicMaterial toneMapped={false} />
      </Text>
    </group>
  )
}

function Texto({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <Text
        scale={0.18}
        position={[0, 0.08, 1.25]}
        anchorX={"center"}
        anchorY={"center"}
        lineHeight={1.25}
        textAlign="center"
      >
        Te movés con las flechitas {"\n"}Spacebar para saltar
        <meshBasicMaterial toneMapped={false} />
      </Text>
    </group>
  )
}

function FloorColider() {
  return <CuboidCollider args={[14, 0.05, 14]} position={[0, -0.05, 2]} restitution={0.5} />
}

function WallsColider() {
  return (
    <>
      <CuboidCollider args={[12, 12, 0.05]} position={[0, 10, 13]}></CuboidCollider>
      <CuboidCollider args={[0.05, 12, 12]} position={[12, 10, 2]}></CuboidCollider>
      <CuboidCollider args={[0.05, 12, 12]} position={[-12, 10, 2]}></CuboidCollider>
      <CuboidCollider args={[12, 12, 0.05]} position={[0, 10, -8]}></CuboidCollider>
    </>
  )
}

const Escalon = ({ position = [0, 0.5, -4.84] }) => {
  const size = [0.8, 0.05, 0.5]
  const sizeCollider = size.map((item) => item / 2)

  return (
    <CuboidCollider position={position} args={sizeCollider} restitution={0.5} friction={0.5}>
      <mesh receiveShadow>
        <boxGeometry args={size} />
        <meshStandardMaterial color={"gray"} />
      </mesh>
    </CuboidCollider>
  )
}

const Escalones = () => {
  const altura = 0.84
  return (
    <>
      <Escalon position={[0, altura, -4.84]} />
      <Escalon position={[-1, altura * 2, -4.84]} />
      <Escalon position={[1, altura * 2, -4.84]} />
      <Escalon position={[0, altura * 3, -4.84]} />
      <Escalon position={[-1, altura * 4, -4.84]} />
      <Escalon position={[1, altura * 4, -4.84]} />
      <Escalon position={[0, altura * 5, -4.84]} />
      <Escalon position={[-1, altura * 6, -4.84]} />
      <Escalon position={[1, altura * 6, -4.84]} />
      <Escalon position={[0, altura * 7, -4.84]} />
      <Escalon position={[-1, altura * 8, -4.84]} />
      <Escalon position={[-2, altura * 9, -4.84]} />
      <Escalon position={[-1, altura * 10, -4.84]} />
      <Escalon position={[0, altura * 11, -4.84]} />
      <Escalon position={[1, altura * 12, -4.84]} />
      <Escalon position={[2, altura * 13, -4.84]} />
      <Escalon position={[1, altura * 14, -4.84]} />
      <Escalon position={[0, altura * 15, -4.84]} />
      <Escalon position={[-1, altura * 16, -4.84]} />
      <Escalon position={[-2, altura * 17, -4.84]} />
      <Escalon position={[-1, altura * 18, -4.84]} />
      <Escalon position={[0, altura * 18, -4.84]} />
    </>
  )
}

const Cartel = () => {
  return (
    <mesh scale={0.7} position={[-0.52, 0.84 * 19.4, -4.84]}>
      <Image url="/globant-logo.svg" scale={[6, 1]} transparent />
    </mesh>
  )
}

function Level() {
  return (
    <>
      <Texto position={[0, 0, 0]} />
      <Title />
      <FloorColider />
      <WallsColider />
      <Escalones />
      <Cartel />
    </>
  )
}

export default Level
