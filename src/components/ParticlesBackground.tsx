"use client";

import { useEffect, useState } from "react";
import { Particles, initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setReady(true);
        });
    }, []);

    if (!ready) return null;

    return (
        <Particles
            options={{
    fullScreen: {
        enable: true,
        zIndex: 0,
    },

    fpsLimit: 60,

    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "grab",
            },
        },
        
    },

    particles: {
        number: {
            value: 120,
            density: {
                enable: true,
                
            },
        },

        color: {
            value: "#045a28ff",
        },

        shape: {
            type: "circle",
        },

        opacity: {
            value: 0.5,
        },

        size: {
            value: 1,
        },

        links: {
            enable: true,
            color: "#ffffff",
            distance: 30,
            opacity: 0.3,
            width: 1,
        },

        move: {
            enable: true,
            speed: 0.15,
            direction: "none",
            outModes: {
                default: "out",
            },
        },
    },

    detectRetina: true,
}}
        />
    );
}
