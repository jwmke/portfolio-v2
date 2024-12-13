'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Model() {
  const model = useGLTF("./models/thinker.glb");
  const modelRef = useRef();

  const x_offset = -62;
  const y_offset = -74;
  
  useFrame((state) => {
    if (modelRef.current) {
      const hoverAmplitude = 1.;
      const hoverSpeed = 1.5;
      
      const hover = Math.sin(state.clock.elapsedTime * hoverSpeed) * hoverAmplitude;
      modelRef.current.position.y = y_offset + hover; 
    }
  });
  
  model.scene.traverse((o) => {
    if (o.isMesh) {
      const geometry = new THREE.EdgesGeometry(o.geometry, 20);
      const wireMaterial = new THREE.LineBasicMaterial({ 
        color: 0x5bdec4,
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
      o.add(wireframe);
      
      o.material = new THREE.MeshPhongMaterial({
        color: 0x5bdec4,
        emissive: 0x5bdec4,
        emissiveIntensity: 0.3,
        shininess: 30,
        specular: 0x5bdec4,
        wireframe: false,
        polygonOffset: true,
        polygonOffsetFactor: 1,
        polygonOffsetUnits: 1
      });
      o.renderOrder = 0;
    }
  });

  return <mesh ref={modelRef}>
    <primitive object={model.scene} 
      position={[x_offset, 0, -160.0]}
      rotation={[0.2, 5.2, 0]}
      scale={[1.1, 1.1, 1.1]}
    />
  </mesh>;
}