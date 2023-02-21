/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/models/HingeMetal.glb
*/

import React from 'react';
import { useGLTF } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';
import { useModel } from '../ModelContext';


const HingeMetal = (props) => {
  const { nodes, materials } = useGLTF('./models/HingeMetal.glb');

  const model = useModel();

  /**
 * A function that generates the material for the model (based on string name)
 * @param {String} materialName 
 * @returns {MeshStandardMaterial}
 */
  const generateMaterial = () => {
    let materialProps;

    const stainlessMaterial = {
      color: '#b7b7b7',
      metalness: 1,
      clearcote: 1,
      clearcoatRoughness: 0,
      roughness: 0.5,
      reflectivity: 1,
    };

    const brassMaterial = {
      color: '#AFA268',
      metalness: 0.78,
      clearcoatRoughness: 0.52,
      roughness: 0,
      reflectivity: 0,
    };

    const blackMaterial = {
      color: '#303030',
      metalness: 0.88,
      clearcoatRoughness: 0.52,
      roughness: 1,
      reflectivity: 0,
    };

    switch (model.material) {
      case 'stainless':
        materialProps = stainlessMaterial;
        break;
      case 'brass':
        materialProps = brassMaterial;
        break;
      case 'black':
        materialProps = blackMaterial;
        break;
      default:
        materialProps = stainlessMaterial;
    }

    const material = new MeshStandardMaterial({ ...materialProps });
    return material;
  };

  const modelMaterial = generateMaterial();

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Circle.geometry}
        material={modelMaterial ? modelMaterial : nodes.Circle.material}
        position={[0, 0, -0.5]}
      />
      <mesh
        geometry={nodes.Circle001.geometry}
        material={modelMaterial ? modelMaterial : nodes.Circle001.material}
        position={[0, -0.31, -0.52]}
      />
      <mesh
        geometry={nodes.Plane.geometry}
        material={modelMaterial ? modelMaterial : nodes.Plane.material}
        position={[0.24, 0.08, -1.07]}
        scale={model.scale}
      />
      <mesh
        geometry={nodes.Plane001.geometry}
        material={modelMaterial ? modelMaterial : nodes.Plane001.material}
        position={[0.24, 0.08, -1.07]}
      />
      <mesh
        geometry={nodes.Circle004.geometry}
        material={modelMaterial ? modelMaterial : nodes.Circle004.material}
        position={[0, -0.03, -1.1]}
      />
      <mesh
        geometry={nodes.Plane002.geometry}
        material={modelMaterial ? modelMaterial : nodes.Plane002.material}
        position={[0, -0.11, -2.34]}
      />
      <mesh
        geometry={nodes.Bolt.geometry}
        material={modelMaterial ? modelMaterial : nodes.Bolt.material}
        position={[0, 0.26, -1.85]}
      />
      <mesh
        geometry={nodes.Bolt001.geometry}
        material={modelMaterial ? modelMaterial : nodes.Bolt001.material}
        position={[-0.4, -0.12, -2.34]}
      />
      <mesh
        geometry={nodes.Bolt002.geometry}
        material={modelMaterial ? modelMaterial : nodes.Bolt002.material}
        position={[0.4, -0.12, -2.34]}
      />
      <mesh
        geometry={nodes.Bolt003.geometry}
        material={modelMaterial ? modelMaterial : nodes.Bolt003.material}
        position={[0.72, -0.02, 0.01]}
        scale={1.05}
      />
    </group>
  );
};

useGLTF.preload('./models/HingeMetal.glb');

export default HingeMetal;
