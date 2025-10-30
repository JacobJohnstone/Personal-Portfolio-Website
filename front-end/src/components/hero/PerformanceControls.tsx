import React, { useState, useEffect } from "react";

interface PerformanceControlsProps {
    onParticleCountChange: (count: number) => void;
    onUseSVGChange: (useSVG: boolean) => void;
    onLowPowerModeChange: (enabled: boolean) => void;
}

const PerformanceControls: React.FC<PerformanceControlsProps> = ({
    onParticleCountChange,
    onUseSVGChange,
    onLowPowerModeChange,
}) => {
    const [particleCount, setParticleCount] = useState(60);
    const [useSVG, setUseSVG] = useState(false);
    const [lowPowerMode, setLowPowerMode] = useState(false);

    // Check if user prefers reduced motion
    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) {
            setLowPowerMode(true);
            setParticleCount(20);
        }
    }, []);

    const handleParticleCountChange = (count: number) => {
        setParticleCount(count);
        onParticleCountChange(count);
    };

    const handleUseSVGChange = (svg: boolean) => {
        setUseSVG(svg);
        onUseSVGChange(svg);
    };

    const handleLowPowerModeChange = (enabled: boolean) => {
        setLowPowerMode(enabled);
        onLowPowerModeChange(enabled);
        if (enabled) {
            setParticleCount(20);
            onParticleCountChange(20);
        }
    };

    return (
        <div style={{
            position: 'fixed',
            top: '10px',
            right: '10px',
            background: 'rgba(0,0,0,0.8)',
            padding: '10px',
            borderRadius: '8px',
            color: 'white',
            fontSize: '12px',
            zIndex: 1000,
            display: 'none' // Hidden by default, can be shown for debugging
        }}>
            <div>
                <label>
                    Particle Count: {particleCount}
                    <input
                        type="range"
                        min="10"
                        max="120"
                        value={particleCount}
                        onChange={(e) => handleParticleCountChange(Number(e.target.value))}
                    />
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={useSVG}
                        onChange={(e) => handleUseSVGChange(e.target.checked)}
                    />
                    Use SVG (Better Performance)
                </label>
            </div>
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={lowPowerMode}
                        onChange={(e) => handleLowPowerModeChange(e.target.checked)}
                    />
                    Low Power Mode
                </label>
            </div>
        </div>
    );
};

export default PerformanceControls;
