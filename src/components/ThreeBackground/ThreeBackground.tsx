"use client";
import { colors } from '@/utils/colors';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

/**
 * Three.js 3D 배경 컴포넌트
 * 
 * 주요 기능:
 * - 회전하는 토러스(도넛) 오브젝트
 * - 떠다니는 구체 8개 (랜덤 크기, 위치)
 * - 200개의 파티클 효과 (별처럼 보이는 점들)
 * - 3D "PORTFOLIO" 텍스트 (베벨 효과)
 * - 마우스 움직임에 반응하는 카메라
 * - 움직이는 조명 효과
 */
export const ThreeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // ========================================
    // 1. Scene 기본 설정
    // ========================================
    const scene = new THREE.Scene();

    // 카메라 설정 (시야각 75도, 화면 비율, near/far 클리핑)
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 8; // 카메라를 뒤로 8만큼 배치

    // 렌더러 설정 (투명 배경, 안티앨리어싱)
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,  // 투명 배경 활성화
      antialias: true  // 부드러운 엣지 처리
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio); // 레티나 디스플레이 지원
    renderer.setClearColor(0x000000, 0); // 완전 투명
    containerRef.current.appendChild(renderer.domElement);

    // ========================================
    // 2. 조명 설정
    // ========================================
    // 크림색 포인트 라이트 (메인 조명, 움직임)
    // Key Light (주광)
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(2, 2, 4);
    scene.add(keyLight);

    // Fill Light (보조광)
    const fillLight = new THREE.DirectionalLight(0xC9A7FF, 0.6);
    fillLight.position.set(-2, 1, 3);
    scene.add(fillLight);

    // 앰비언트 라이트 (전체적인 기본 밝기)
    const ambient = new THREE.AmbientLight(0xffffff, 0.8); 
    scene.add(ambient);

    // ========================================
    // 3. 떠다니는 구체들 생성
    // ========================================
    const spheres: THREE.Mesh[] = [];
    for (let i = 0; i < 8; i++) {
      // 랜덤 크기의 구체 (0.2 ~ 0.5 반지름)
      const geometry = new THREE.SphereGeometry(0.2 + Math.random() * 0.3, 32, 32);
      
      // 메탈릭한 크림색 재질
      const material = new THREE.MeshStandardMaterial({
        color: 0xFFF8E7,
        roughness: 0.3,      // 약간 거친 표면
        metalness: 0.7,      // 메탈릭 효과
        emissive: 0xFFF8E7,  // 자체 발광
        emissiveIntensity: 0.3, // 발광 강도
      });
      const sphere = new THREE.Mesh(geometry, material);
      
      // 랜덤 위치 배치
      sphere.position.x = (Math.random() - 0.5) * 15;
      sphere.position.y = (Math.random() - 0.5) * 10;
      sphere.position.z = (Math.random() - 0.5) * 8;
      
      scene.add(sphere);
      spheres.push(sphere);
    }

    // ========================================
    // 4. 회전하는 토러스 (도넛)
    // ========================================
    const torusGeometry = new THREE.TorusGeometry(3, 0.4, 16, 100);
    const torusMaterial = new THREE.MeshStandardMaterial({
      color: 0xFFF8E7,
      roughness: 0.2,   // 매끈한 표면
      metalness: 0.9,   // 강한 메탈릭
      wireframe: false, // 와이어프레임 끄기
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.z = -2; // 뒤쪽 배치
    torus.rotation.x = Math.PI / 4; // 45도 기울이기
    scene.add(torus);

    // ========================================
    // 5. 파티클 효과 (별 같은 점들)
    // ========================================
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 200;
    const posArray = new Float32Array(particlesCount * 3); // x,y,z 좌표

    // 랜덤 위치에 파티클 배치
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 30;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0xFFF8E7,
      transparent: true,
      opacity: 0.6, // 반투명
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // ========================================
    // 6. 3D 텍스트 "PORTFOLIO"
    // ========================================
    let textMesh: THREE.Mesh | null = null;
    const fontLoader = new FontLoader();
    
    // 폰트 비동기 로딩
    fontLoader.load(
      "https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",
      font => {
        const textGeometry = new TextGeometry("PORTFOLIO", {
          font,
          size: 2.0,           // 텍스트 크기
          depth: 0.3,          // 텍스트 깊이 (두께)
          curveSegments: 12,   // 곡선 부드러움
          bevelEnabled: true,  // 베벨(입체감) 활성화
          bevelThickness: 0.05, // 베벨 두께
          bevelSize: 0.03,     // 베벨 크기
          bevelSegments: 5,    // 베벨 세그먼트
        });

        const textMaterial = new THREE.MeshStandardMaterial({
          color: colors.text.cream,
          roughness: 0.35,
          metalness: 0.25,
          emissive: colors.text.cream,
          emissiveIntensity: 0.22,
        });

        textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textGeometry.center(); // 텍스트 중앙 정렬
        textMesh.position.z = 2; // 앞쪽 배치
        scene.add(textMesh);
      }
    );

    // ========================================
    // 7. 마우스 인터랙션
    // ========================================
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      // 마우스 위치를 -1 ~ 1 범위로 정규화
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // ========================================
    // 8. 애니메이션 루프
    // ========================================
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // 토러스 회전
      torus.rotation.x += 0.003;
      torus.rotation.y += 0.005;

      // 구체들 떠다니기 (사인파 움직임)
      spheres.forEach((sphere, index) => {
        sphere.position.y = Math.sin(elapsedTime + index) * 2;
        sphere.position.x += Math.sin(elapsedTime * 0.5 + index) * 0.01;
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;
      });

      // 파티클 천천히 회전
      particlesMesh.rotation.y = elapsedTime * 0.05;


      // 마우스에 따라 카메라 부드럽게 움직임 (lerp)
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // 조명도 원형 궤도로 움직이기
      keyLight.position.x = Math.sin(elapsedTime) * 5;
      keyLight.position.z = Math.cos(elapsedTime) * 5;
      fillLight.position.x = Math.sin(elapsedTime) * 5;
      fillLight.position.z = Math.cos(elapsedTime) * 5;

      renderer.render(scene, camera);
    };
    animate();

    // ========================================
    // 9. 반응형 (리사이즈 핸들러)
    // ========================================
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // ========================================
    // 10. 메모리 정리 (Cleanup)
    // ========================================
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }

      // 모든 지오메트리와 머티리얼 메모리 해제
      spheres.forEach(sphere => {
        sphere.geometry.dispose();
        (sphere.material as THREE.Material).dispose();
      });

      torus.geometry.dispose();
      (torus.material as THREE.Material).dispose();
      
      particlesGeometry.dispose();
      particlesMaterial.dispose();

      if (textMesh) {
        textMesh.geometry.dispose();
        (textMesh.material as THREE.Material).dispose();
      }

      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};