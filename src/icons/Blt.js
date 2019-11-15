import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgBlt = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="#6067F1"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.001 22.69a4.234 4.234 0 014.237 4.219s.11 1.048-.61 2.541c-1.375 2.847-3.682 4.296-3.682 4.296s-2.128-1.298-3.52-4.296c-.814-1.753-.661-2.541-.661-2.541A4.234 4.234 0 0120 22.689zm9.704-6.57C32.55 17.492 34 19.8 34 19.8s-1.297 2.128-4.295 3.52c-1.754.814-2.542.662-2.542.662a4.234 4.234 0 01-4.219-4.237 4.234 4.234 0 014.15-4.235l.07-.001s1.047-.11 2.54.61zm-16.868-.611a4.234 4.234 0 014.219 4.236 4.234 4.234 0 01-4.22 4.237s-.787.152-2.54-.662C7.296 21.928 6 19.8 6 19.8s1.449-2.306 4.295-3.68c1.494-.721 2.542-.611 2.542-.611zm7.11-9.759s2.306 1.449 3.68 4.295c.72 1.494.61 2.542.61 2.542a4.234 4.234 0 01-4.236 4.219 4.234 4.234 0 01-4.236-4.22s-.153-.787.661-2.54c1.392-2.999 3.52-4.296 3.52-4.296z"
      fill="#fff"
    />
  </Svg>
);

export default SvgBlt;
