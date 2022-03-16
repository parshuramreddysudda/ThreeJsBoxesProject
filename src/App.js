import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';

import './App.scss';


const Box = () => {

  const mesh = useRef(null);
  useFrame(() => (
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  ));
  return (
    <mesh ref={mesh}>
      <boxBufferGeometry
        attach='geometry'
        args={[1, 1, 1]}
      />
      <meshStandardMaterial attach='material' color='red' />

    </mesh>

  )
}

function App() {


  return (
    <>
      <Canvas>
        <ambientLight intensity={.3} />
        <Box />
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
