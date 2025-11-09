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
        onClick: {
          enable: true, // 클릭 이벤트 활성화
          mode: "bubble", // 클릭 시 버블 효과
        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 100, // 버블 효과가 적용될 거리
          size: 10, // 버블 시 커지는 크기
          duration: 2, // 버블 효과 지속 시간
          opacity: 0, // 버블 시 투명도 (사라지게)
          speed: 3,
        },
        push: {
          quantity: 4,
        },
      },
    },
    particles: {
      number: {
        value: 100, // 배경 별 개수
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: {
        value: { min: 0.1, max: 0.7 },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
          sync: false,
        },
      },
      size: {
        value: { min: 0.5, max: 2 },
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "out",
        },
      },
      // 유성(shooting star) 효과를 위한 추가 입자 설정
      life: {
        duration: {
          sync: false,
          value: 3,
        },
        count: 0,
        delay: {
          random: true,
          value: 0.1,
        },
      },
      rotate: {
        random: true,
        value: 0,
        animation: {
          enable: true,
          speed: 5,
          sync: false,
        },
      },
      twinkle: {
        lines: {
          enable: true,
          frequency: 0.005,
          opacity: 1,
        },
        particles: {
          enable: true,
          frequency: 0.05,
          opacity: 1,
        },
      },
    },
    // 유성(shooting star) 효과를 위한 추가 입자 설정
    emitters: [
      {
        direction: "top-left",
        rate: {
          quantity: 1,
          delay: 10, // 10초마다 한 번씩 유성 발생
        },
        size: {
          width: 0,
          height: 0,
        },
        position: {
          x: 0,
          y: 0,
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "star",
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: true,
              speed: 4,
              minimumValue: 0.1,
              sync: false,
              startValue: "random",
              destroy: "max",
            },
          },
          opacity: {
            value: 1,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0,
              sync: false,
              startValue: "max",
              destroy: "min",
            },
          },
          move: {
            enable: true,
            speed: { min: 8, max: 15 }, // 유성 속도 더 빠르게
            direction: "bottom-right", // 유성 방향
            straight: false,
            outModes: {
              default: "destroy",
            },
            trail: {
              enable: true,
              length: 20, // 꼬리 길이 더 길게
              fillColor: {
                value: "#ffffff",
              },
            },
          },
        },
      },
    ],
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
