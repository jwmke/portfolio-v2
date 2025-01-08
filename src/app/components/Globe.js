'use client'
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Inner component for the globe model
const GlobeModel = () => {
  const modelRef = useRef();
  const { scene } = useGLTF("./models/globe.glb");
  
  // Continuous rotation animation
  useFrame((state) => {
    if (modelRef.current) {
      // Slow rotation around Y axis (360 degrees)
      modelRef.current.rotation.y += 0.001;
    }
  });

  // Apply materials and effects to the globe
  scene.traverse((object) => {
    if (object.isMesh) {
      // Create wireframe effect
      const geometry = new THREE.EdgesGeometry(object.geometry, 20);
      const wireMaterial = new THREE.LineBasicMaterial({ 
        color: 0x2dd4bf,
        transparent: true,
        opacity: 0.8,
        depthWrite: false,
        polygonOffset: true,
        polygonOffsetFactor: -1,
        polygonOffsetUnits: -1
      });
      const wireframe = new THREE.LineSegments(geometry, wireMaterial);
      wireframe.renderOrder = 1;
      wireframe.position.add(new THREE.Vector3(0, 0, -0.001));
      object.add(wireframe);
      
      // Apply main material
      object.material = new THREE.MeshPhongMaterial({
        color: 0x2dd4bf,
        emissive: 0x2dd4bf,
        emissiveIntensity: 0.3,
        shininess: 30,
        specular: 0x2dd4bf,
        wireframe: false,
        polygonOffset: true,
        polygonOffsetFactor: 1,
        polygonOffsetUnits: 1,
        transparent: true,
        opacity: 0.9
      });
      object.renderOrder = 0;
    }
  });

  return (
    <mesh ref={modelRef}>
      <primitive 
        object={scene}
        scale={[1, 1, 1]}
        position={[0, 0, 0]}
      />
    </mesh>
  );
};

// Main component that wraps everything
const Globe = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 5],
        fov: 45,
        near: 0.1,
        far: 1000
      }}
    >
      {/* Lighting setup */}
      <ambientLight intensity={0.3} color="#5bdec4" />
      <directionalLight position={[5, 5, 5]} intensity={0.7} color="#ffffff" />
      <directionalLight position={[-3, -3, -3]} intensity={0.3} color="#5bdec4" />
      
      {/* Globe model */}
      <GlobeModel />

      {/* Orbit controls with some restrictions */}
      <OrbitControls
        enableZoom={true}
        minDistance={3}
        maxDistance={10}
        enablePan={false}
        enableRotate={true}
        rotateSpeed={0.5}
        autoRotate={false}
      />
    </Canvas>
  );
};

export default Globe;