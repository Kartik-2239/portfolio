import Particles, { ParticlesProvider, type IParticlesProps } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const initParticles = async (engine: Parameters<typeof loadFull>[0]) => {
  await loadFull(engine);
};


export default function ParticleContainer() {
  const options: IParticlesProps["options"] = {
    fullScreen: { enable: false },
    background: {
      color: {
        value: "transparent",
      },
    },
    particles: {
      number: {
        value: 50,
        density: {
          enable: false,
        },
      },
      color: {
        value: ["#a87132"],
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
        value: { min: 2, max: 4 },
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
  return (
    <ParticlesProvider init={initParticles}>
      <div className="relative h-24 md:h-48 w-full overflow-hidden">
        <Particles id="default-particles" className="pointer-events-none absolute inset-0" options={options} />
      </div>
    </ParticlesProvider>
  );
}
