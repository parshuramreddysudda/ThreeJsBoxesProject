import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';

import './App.scss';


const SpinnerMesh = ({ position, args, color }) => {

  const mesh = useRef(null);
  useFrame(() => (
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  ));
  return (
    <mesh castShadow position={position} ref={mesh}>
      <boxBufferGeometry
        attach='geometry'
        args={args}
      />
      <meshStandardMaterial attach='material' color={color} />

    </mesh>

  )
}

function App() {


  return (
    <>
      <Canvas
        shadowMap
        colorManagement
        camera={{ position: [-5, 2, 10], fov: 70 }} >


        <ambientLight intensity={0.3} />

        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}

        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, 1, 0]} intensity={1.5} />

        <group>
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, - 3, 0]}>

            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <shadowMaterial attach='material' />
            {/* This will need to cast a shadow */}
            {/* <meshStandardMaterial attach='material' color={'yellow'} /> */}
          </mesh>
          <SpinnerMesh position={[0, 1, 0]} args={[3, 2, 1]} color='lightblue' />
          <SpinnerMesh position={[-2, 1, -5]} color='pink' />
          <SpinnerMesh position={[5, 1, 2]} color='pink' />
          <SpinnerMesh position={[0, 4, 0]} args={[1, 1, 1]} color='pink' />
        </group>

      </Canvas>
    </>
  );



  //  canvas element does not allow to create html elements so we write it out side the component */
  //          <mesh>
  //           <boxBufferGeometry
  //             attach='geometry'
  //             args={[1, 1, 1]}
  //           />

  //           <meshStandardMaterial attach='material' />


  //           boxBufferGeometry:
  //            Require attribute is 
  //                 1. attach: which property this geometry represents to 
  //                 2. args: heigh width


  //           1. Inside the mesh we need to define Material and Geometry
  //              Geometry will define shape
  //               and Material with define the color or look

  //         </mesh> 

}

export default App;
