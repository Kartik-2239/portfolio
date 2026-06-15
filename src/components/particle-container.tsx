import Particles, { ParticlesProvider, type IParticlesProps } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const initParticles = async (engine: Parameters<typeof loadFull>[0]) => {
  await loadFull(engine);
};

const options: IParticlesProps["options"] = {
  fullScreen: { enable: false },
  background: {
    color: {
      value: "transparent",
    },
  },
  particles: {
    number: {
      value: 1000,
      density: {
        enable: true,
      },
    },
    color: {
      value: "#ff6b6b",
    },
    move: {
      enable: true,
      speed: 1,
      outModes: {
        default: "bounce",
      },
    },
    opacity: {
      value: 0.7,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 3, max: 5 },
    },
    collisions:{
        enable: true,
    },
  },
  interactivity: {
    events: {
        onHover: { enable: true, mode: "repulse" },
    },
    modes: {
        repulse: {
            distance: 50,
            duration: 1,
        },
    }
  }
};

export default function ParticleContainer() {
  return (
    <ParticlesProvider init={initParticles}>
      <div className="relative h-24 md:h-48 w-full overflow-hidden">
        <Particles id="default-particles" className="pointer-events-none absolute inset-0" options={options} />
      </div>
    </ParticlesProvider>
  );
}
