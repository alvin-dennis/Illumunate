"use client"

import { useIsMobile } from '@/hooks/useMobile'
import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

export default function Background() {
    const isMobile = useIsMobile();
    return (
        <ShaderGradientCanvas
            style={{
                width: '100%',
                height: '100%',
                opacity: 0.3,
            }}
            lazyLoad={true}
            fov={35}
            pixelDensity={isMobile ? 0.75 : 1} 
            pointerEvents="none"
        >
            <ShaderGradient
                animate={isMobile ? "off" : "on"}
                type={isMobile ? "plane" : "waterPlane"}
                wireframe={false}
                shader="positionMix"
                uTime={isMobile ? 0 : 10}
                uSpeed={isMobile ? 0 : 0.4}
                uStrength={isMobile ? 1 : 2}
                uDensity={isMobile ? 1 : 2}
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