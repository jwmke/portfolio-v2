'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { lazy } from 'react'
const Model = lazy(() => import('./Model'))

const Scene = ({
  small = false
}) => {
  return (
    <Canvas 
      camera={{
        position: [0, 0, 2],
        near: 0.001,
        far: 400,
        zoom: small ? 1.2 : 1
      }}
      fallback={null}
    > 
      <ambientLight intensity={0.3} color="#5bdec4" />
      
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.7}
        color="#ffffff"
      />
      
      <directionalLight
        position={[-3, -3, -3]}
        intensity={0.3}
        color="#5bdec4"
      />
      <Model />
      <OrbitControls
        maxAzimuthAngle={.7}
        minAzimuthAngle={5.8}
        maxPolarAngle={2.5}
        minPolarAngle={1.1}
        enableZoom={false}
        enablePan={false}
        panSpeed={0.1}
        enableRotate={true}
        rotateSpeed={0.1}
      />
    </Canvas>
  )
}

export default Scene;