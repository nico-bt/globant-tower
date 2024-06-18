"use client"

import { Environment, KeyboardControls, Loader, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Physics } from "@react-three/rapier"
import { Suspense, useMemo } from "react"
import Level from "./Level"
import Player from "./Player"
import Lights from "./Lights"
import Tower from "./Tower"
import Bombero from "./Bombero"
import Camion from "./Camion"
import Autos from "./Autos"
import Batman from "./Batman"
import Ibm from "./Ibm"
import MessiLego from "./MessiLego"

export default function App() {
  const map = useMemo(() => {
    return [
      { name: "forward", keys: ["ArrowUp"] },
      { name: "back", keys: ["ArrowDown"] },
      { name: "left", keys: ["ArrowLeft"] },
      { name: "right", keys: ["ArrowRight"] },
      { name: "jump", keys: ["Space"] },
    ]
  }, [])

  return (
    <>
      <KeyboardControls map={map}>
        <Canvas shadows camera={{ fov: 45, near: 0.1, far: 200, position: [2.5, 4, 6] }}>
          <Suspense fallback={null}>
            {/* <OrbitControls /> */}
            <Environment
              background={true}
              files={"/city.hdr"}
              ground={{ height: 15, radius: 542, scale: 122 }}
            />
            <Physics>
              <Lights />
              <Level />
              <Player />
              <Tower />

              <Bombero />
              <Bombero rotation={[0, 0.6, 0]} position={[-4.75, 0, -3.25]} />
              <Bombero rotation={[0, 0.9, 0]} position={[-6, 0, -4]} />
              <Bombero rotation={[0, 1.5, 0]} position={[-6, 0, -2]} />
              <Bombero rotation={[0, -1.5, 0]} position={[-5.5, 0, -2]} />
              <Bombero type="fixed" rotation={[0, -1.5, 0]} position={[-0.1, 15.16, -4.8]} />
              <Bombero type="fixed" rotation={[0, -1.5, 0]} position={[0.35, 15.16, -4.8]} />
              <Camion />

              <Autos />
              <Ibm />

              <Batman type="fixed" rotation={[0, -0.25, 0]} position={[2.5, 16.79, -5.01]} />
              <MessiLego />
            </Physics>
          </Suspense>
        </Canvas>
      </KeyboardControls>
      <Loader />
    </>
  )
}
