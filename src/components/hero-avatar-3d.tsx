"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";

export function HeroAvatar3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const mountElement = mountRef.current;

    if (!mountElement) {
      return;
    }

    const mount = mountElement;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    camera.position.set(0, 1.15, 2.92);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    mount.appendChild(renderer.domElement);

    const keyLight = new THREE.DirectionalLight(0x7df4ff, 2.4);
    keyLight.position.set(2.6, 4, 3);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xff8a91, 1.4);
    fillLight.position.set(-3, 2, 2);
    scene.add(fillLight);

    const ambient = new THREE.AmbientLight(0xffffff, 1.1);
    scene.add(ambient);

    const rimLight = new THREE.PointLight(0x00f0ff, 2.2, 7);
    rimLight.position.set(0, 1.6, -2);
    scene.add(rimLight);

    const mixerClock = new THREE.Clock();
    const loader = new FBXLoader();
    let avatar: THREE.Object3D | null = null;
    let mixer: THREE.AnimationMixer | null = null;
    let frameId = 0;

    function resize() {
      const width = mount.clientWidth;
      const height = mount.clientHeight;

      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);
    resize();

    loader.load(
      "/models/ready-player-me-waving.fbx",
      (object) => {
        avatar = object;
        const box = new THREE.Box3().setFromObject(object);
        const size = new THREE.Vector3();
        const center = new THREE.Vector3();
        box.getSize(size);
        box.getCenter(center);

        object.position.sub(center);
        const maxAxis = Math.max(size.x, size.y, size.z);
        object.scale.setScalar(3.32 / maxAxis);
        object.position.y = -0.38;
        object.rotation.y = 0;

        object.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (child.material) {
              const materials = Array.isArray(child.material) ? child.material : [child.material];
              materials.forEach((material) => {
                material.side = THREE.DoubleSide;
              });
            }
          }
        });

        if (object.animations.length > 0) {
          mixer = new THREE.AnimationMixer(object);
          const action = mixer.clipAction(object.animations[0]);
          action.play();
        }

        scene.add(object);
        setIsLoaded(true);
      },
      undefined,
      () => {
        setHasError(true);
      },
    );

    function animate() {
      const delta = mixerClock.getDelta();

      if (mixer) {
        mixer.update(delta);
      }

      if (avatar) {
        avatar.rotation.y = Math.sin(mixerClock.elapsedTime * 0.9) * 0.045;
      }

      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      renderer.dispose();
      renderer.domElement.remove();
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => material.dispose());
        }
      });
    };
  }, []);

  return (
    <div className="hero-avatar-wrap" aria-label="Animated 3D avatar preview">
      <div ref={mountRef} className="hero-avatar-canvas" data-avatar-loaded={isLoaded ? "true" : "false"} />
      {!isLoaded && !hasError && (
        <div className="font-tech absolute inset-0 grid place-items-center text-xs uppercase text-[#b9cacb]">
          Loading avatar
        </div>
      )}
      {hasError && (
        <div className="font-tech absolute inset-0 grid place-items-center px-5 text-center text-xs uppercase text-[#ff8a91]">
          Avatar model could not load
        </div>
      )}
    </div>
  );
}
