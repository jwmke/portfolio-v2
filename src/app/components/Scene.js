'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { lazy } from 'react'
// import Model from './Model'
const Model = lazy(() => import('./Model'))

const Scene = () => {
    return (<>
        <Canvas camera={{position:[0.,0.,.3], near: 0.001, far: 400, zoom: 1.5}} fallback={null}> 
            <ambientLight />
            <pointLight position={[10, 10, 10]}/>
            <Model/>
            <OrbitControls maxAzimuthAngle={0.3} minAzimuthAngle={5.8} maxPolarAngle={2.5} minPolarAngle={1.1}
            enableZoom={true} enablePan={true} panSpeed={0.1} enableRotate={true} rotateSpeed={0.1}/>
        </Canvas>
    </>)
}

export default Scene;