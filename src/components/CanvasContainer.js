import { Canvas } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import { Suspense, useState } from 'react';
import Loader from './Loader';
import HingeMetal from './HingeMetal';
import { Checkbox } from 'antd';

const CanvasContainer = () => {

  const[displayGridHelper, setdisplayGridHelper] = useState(false);

  const onToggleDisplayGrid = (e) => {
    setdisplayGridHelper(e.target.checked);
  };

  return (
    <>
    <Canvas
      colormanagement
      pixelratio={window.devicePixelRatio}
      camera={{ fov: 15, position: [-10, 10, 10] }}
      style={{ height: '45vh' }} 
    >
      <Html as='div' fullscreen><Checkbox onChange={onToggleDisplayGrid} style={{padding: "1rem"}}>Visa grid</Checkbox></Html>
      <Suspense fallback={<Loader />}>
        <HingeMetal /> 
        <ambientLight color={'#FFF'} />
        <pointLight position={[10, 10, 10]} intensity={5} color="#fff" />
        <gridHelper visible={displayGridHelper} position={[0, -0.5, -1.5]} args={[10, 10, 'lightgray']} />
        <OrbitControls
          minAzimuthAngle={-Math.PI / 4} 
          maxAzimuthAngle={Math.PI / 4}
          minPolarAngle={Math.PI / 6} // top angle
          maxPolarAngle={Math.PI - Math.PI / 3} // bottom angle
          enableZoom={false} 
          enablePan={false}
          enableRotate={true} />
      </Suspense>
    </Canvas>
    </>
  );
};

export default CanvasContainer;
