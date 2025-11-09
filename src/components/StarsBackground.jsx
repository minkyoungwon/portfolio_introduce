// StarsBackground.jsx
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function StarsBackground() {
  // tsparticles 초기화
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  // 효과 옵션
  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: false },
        onClick: { enable: false },
        resize: true,
      },
    },
    particles: {
      number: {
        value: 100, // 별 개수를 조금 늘림
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: {
        value: { min: 0.1, max: 0.7 }, // 투명도 랜덤
        animation: {
          enable: true, // 반짝이는 효과
          speed: 1,
          minimumValue: 0.1,
          sync: false,
        },
      },
      size: {
        value: { min: 0.5, max: 2 }, // 크기 랜덤
      },
      move: {
        enable: true,
        speed: 0.5, // 속도를 매우 느리게
        direction: "none", // 방향 없음 (무작위)
        random: true,
        straight: false,
        outModes: {
          default: "out", // 화면 밖으로 나가도록 유지
        },
      },
    },
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
    />
  );
}

export default StarsBackground;
