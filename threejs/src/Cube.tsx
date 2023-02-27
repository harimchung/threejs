import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';


function Cube() {
  return (
    <div>
      <Canvas>
        <OrbitControls autoRotate={true} />
        <ambientLight color="red" position={[0, 0, 5]} />
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
      </Canvas>
    </div>
  )
}

export default Cube