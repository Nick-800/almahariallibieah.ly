import type { Transition } from "motion/react";

export const springPresets = {
  snappy: {
    type: "spring",
    stiffness: 520,
    damping: 34,
    mass: 0.7,
  } as Transition,
  smooth: {
    type: "spring",
    stiffness: 380,
    damping: 36,
    mass: 0.9,
  } as Transition,
  gentle: {
    type: "spring",
    stiffness: 260,
    damping: 30,
    mass: 1.0,
  } as Transition,
};

export const durations = {
  fast: 0.12,
  base: 0.22,
  slow: 0.38,
};

export const transitions = {
  snappy: springPresets.snappy,
  smooth: springPresets.smooth,
  gentle: springPresets.gentle,
  fade: { duration: durations.base, ease: [0.16, 1, 0.3, 1] },
};
