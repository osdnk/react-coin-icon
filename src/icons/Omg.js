import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgOmg = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="#1A56F0"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.081 10.05a5.079 5.079 0 103.636 1.534h1.44V10.05h-5.076zm10.843 0a5.076 5.076 0 100 10.153 5.076 5.076 0 000-10.153zm-15.92 15.904a5.076 5.076 0 1110.154 0 5.076 5.076 0 01-10.153 0zm1.536 0a3.541 3.541 0 003.541 3.54v.002a3.542 3.542 0 10-3.541-3.542zm10.844-10.827a3.54 3.54 0 107.08 0 3.54 3.54 0 00-7.08 0zm-7.302 3.538a3.54 3.54 0 10.001-7.08 3.54 3.54 0 00-.001 7.08z"
      fill="#fff"
    />
  </Svg>
);

export default SvgOmg;
