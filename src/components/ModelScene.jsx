import { useRef, useEffect, Suspense } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import {
  useGLTF,
  useAnimations,
  Environment,
  ContactShadows,
  PerformanceMonitor,
  Preload,
} from "@react-three/drei"
import * as THREE from "three"

// ───────────────────────── Model ─────────────────────────
function Model({ isMobile }) {
  const group = useRef()

  const { scene, animations } = useGLTF("/model.glb")
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    const scale = isMobile ? 3 : 2
    scene.scale.setScalar(scale)

    // Center model properly
    const box = new THREE.Box3().setFromObject(scene)
    const center = new THREE.Vector3()
    const size = new THREE.Vector3()

    box.getCenter(center)
    box.getSize(size)

    scene.position.sub(center)
    scene.position.y += size.y * 0.22

    // Fix shadows for all meshes
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true
        child.receiveShadow = true
      }
    })

    // Play animation safely
    if (actions && Object.keys(actions).length > 0) {
      const action = Object.values(actions)[0]
      action.reset().fadeIn(0.5).play()
    }
  }, [scene, actions, isMobile])

  useFrame((_, delta) => {
    if (!group.current) return
    group.current.rotation.y += delta * 0.4
  })

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  )
}

// ───────────────────────── Loading ─────────────────────────
function LoadingMesh() {
  const ref = useRef()

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta
    }
  })

  return (
    <mesh ref={ref}>
      <octahedronGeometry args={[0.8, 0]} />
      <meshStandardMaterial
        color="#c8a96e"
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  )
}

// ───────────────────────── Lights ─────────────────────────
function Lights() {
  return (
    <>
      <ambientLight intensity={0.25} />

      <directionalLight
        position={[4, 5, 3]}
        intensity={1.8}
        color="#ffe4b5"
        castShadow
      />

      <directionalLight
        position={[-3, 2, 1]}
        intensity={0.5}
        color="#a8c4e0"
      />

      <pointLight position={[-1, -1, -3]} intensity={1.2} color="#c8a96e" />

      <pointLight position={[0, 4, 0]} intensity={0.4} color="#fff5e0" />
    </>
  )
}

// ───────────────────────── Camera ─────────────────────────
function CameraRig({ isMobile }) {
  const { camera } = useThree()

  useEffect(() => {
    if (isMobile) {
      camera.position.set(0, 0.4, 3.6)
      camera.fov = 78
    } else {
      camera.position.set(0, 0.3, 5.5)
      camera.fov = 45
    }

    camera.lookAt(0, 0, 0)
    camera.updateProjectionMatrix()
  }, [camera, isMobile])

  return null
}

// ───────────────────────── Scene ─────────────────────────
export default function ModelScene({ isMobile }) {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      style={{ background: "transparent" }}
      gl={{
        antialias: true,
        alpha: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.1,
        outputColorSpace: THREE.SRGBColorSpace,
      }}
    >
      <PerformanceMonitor flipflops={3} factor={0.5} />

      <CameraRig isMobile={isMobile} />
      <Lights />

      <Environment preset="warehouse" environmentIntensity={0.35} />

      <ContactShadows
        position={[0, -1.2, 0]}
        opacity={0.25}
        scale={5}
        blur={2.5}
        far={2}
        color="#100f0c"
      />

      <Suspense fallback={<LoadingMesh />}>
        <Model isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

useGLTF.preload("/model.glb")