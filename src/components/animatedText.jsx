import React from "react";
import { useSpring, animated } from "react-spring";

function GradientText() {
  const props = useSpring({
    from: { color: "#aed515" },
    to: async (next) => {
      while (true) {
        await next({ color: "#00ff99" });
        await next({ color: "#5900ff" });
      }
    },
    config: { duration: 2000 },
    reset: true,
  });

  return (
    <div className="bg-gray-900 px-8">
      <animated.h1 className="text-5xl font-bold" style={props}>
        Welcome to NotifyMe
      </animated.h1>
    </div>
  );
}

export default GradientText;
