'use client'
import React, { useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export default function Model() {
  const model = useGLTF("./models/hat.glb");
  
  model.scene.traverse((o) => {
      if (o.isMesh) {
          var geometry = new THREE.EdgesGeometry( o.geometry, 15 );
          var material = new THREE.LineBasicMaterial( { color: 0x000000 } );
          var wireframe = new THREE.LineSegments( geometry, material );
          o.add( wireframe );
          o.material = new THREE.MeshBasicMaterial({color: 0x0000ff, wireframe: false, wireframeLinewidth: 1, transparent: true, opacity: 0.5});
      }
  });

  const [hatMesh, setHatMesh] = useState(null);

  useEffect(() => {
    setTimeout(() => {
        setHatMesh(
          <mesh>
              <primitive object={model.scene} 
              position={[0, 0, 0]}
              rotation={[0.15, -.9, 0]}
              scale={[0.1, 0.1, 0.1]}
              />
          </mesh>
        )
      }, 1000);
  }, []);

  return hatMesh;
}