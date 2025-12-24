"use client"

import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

export default function Background() {
    return (
        <ShaderGradientCanvas
            style={{
                width: '100%',
                height: '100%',
                opacity: 0.3,
            }}
            lazyLoad={true}
            fov={35}
            pixelDensity={1}
            pointerEvents="none"
        >
            <ShaderGradient
                animate="off"
                type="waterPlane"
                wireframe={false}
                shader="positionMix"
                uTime={10}
                uSpeed={0.4}
                uStrength={2}
                uDensity={2}
                uFrequency={0}
                uAmplitude={0}
                positionX={0}
                positionY={0}
                positionZ={0}
                rotationX={2}
                rotationY={21}
                rotationZ={0}
                color1="#040927"
                color2="#c22938"
                color3="#e16f23"
                reflection={0.3}

                // View (camera) props
                cAzimuthAngle={180}
                cPolarAngle={90}
                cDistance={3.5}
                cameraZoom={7}

                // Effect props
                lightType="env"
                brightness={1.1}
                envPreset="lobby"
                grain="on"

                // Tool props
                toggleAxis={false}
                zoomOut={false}
                hoverState=""

                // Optional - if using transition features
                enableTransition={false}
            />
        </ShaderGradientCanvas>
    )
}