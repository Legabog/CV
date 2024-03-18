'use client';

import { Suspense, useEffect, useState, useRef } from 'react';
import { MathUtils, PointLight } from 'three';
import { useFrame } from '@react-three/fiber';
import {
	PerspectiveCamera,
	MeshDistortMaterial,
	Environment,
	ContactShadows,
} from '@react-three/drei';
import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/three';

import { useThemeStore } from '@app/model';
import type { SphereMesh } from './types';

const AnimatedMaterial = a(MeshDistortMaterial);

const Sphere = () => {
	const { setTheme, themeType } = useThemeStore();
	const sphere = useRef<SphereMesh>(null);
	const light = useRef<PointLight>(null);
	const [mode, setMode] = useState<boolean>(false);
	const [down, setDown] = useState<boolean>(false);
	const [hovered, setHovered] = useState<boolean>(false);

	useEffect(() => {
		document.body.style.cursor = hovered ? 'none' : '';
	}, [hovered]);

	useFrame((state) => {
		(light.current as PointLight).position.x = state.pointer.x * 20;
		(light.current as PointLight).position.y = state.pointer.y * 20;

		if (sphere.current) {
			(sphere.current as SphereMesh).position.x = MathUtils.lerp(
				(sphere.current as SphereMesh).position.x,
				hovered ? state.pointer.x / 2 : 0,
				0.2,
			);
			(sphere.current as SphereMesh).position.y = MathUtils.lerp(
				(sphere.current as SphereMesh).position.y,
				Math.sin(state.clock.elapsedTime / 1.5) / 6 + (hovered ? state.pointer.y / 2 : 0),
				0.2,
			);
		}
	});

	const [{ wobble, coat, color, ambient, env }] = useSpring(
		{
			wobble: down ? 1.2 : hovered ? 1.05 : 1,
			coat: mode && !hovered ? 0.04 : 1,
			ambient: mode && !hovered ? 1.5 : 0,
			env: mode && !hovered ? 0.4 : 1,
			color: hovered ? '#E8B059' : themeType === 'dark' ? '#202020' : '#fff',
			config: (n) => n === 'wobble' && hovered && { mass: 2, tension: 1000, friction: 10 },
		} as object,
		[mode, hovered, down],
	);

	return (
		<>
			<PerspectiveCamera fov={ 75 } position={ [0, 0, 5] } makeDefault>
				<a.ambientLight intensity={ ambient } />
				<a.pointLight ref={ light } color='#F8C069' intensity={ env } />
			</PerspectiveCamera>
			<Suspense fallback={ null }>
				<a.mesh
					ref={ sphere }
					scale={ wobble }
					onPointerDown={ () => setDown(true) }
					onPointerOut={ () => setHovered(false) }
					onPointerOver={ () => setHovered(true) }
					onPointerUp={ () => {
						setDown(false);
						setMode(!mode);
						setTheme();
					} }
				>
					<sphereGeometry args={ [1, 64, 64] } />
					<AnimatedMaterial clearcoat={ coat } color={ color } envMapIntensity={ env } />
				</a.mesh>
				<Environment preset='warehouse' />
				<ContactShadows
					blur={ 2.5 }
					far={ 1.6 }
					opacity={ hovered ? 0.5 : 0.4 }
					position={ [0, -1.6, 0] }
				/>
			</Suspense>
		</>
	);
};
export default Sphere;
