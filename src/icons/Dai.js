import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgDai = props => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle fill="#FEBE44" cx={16} cy={16} r={16} />
      <Path
        d="M16 3.92l12 11.999-12 12-12-12L16 3.92zM8.437 14.814a.193.193 0 0 0 .144.32h4.913a.193.193 0 0 0 .144-.064l2.132-2.393a.193.193 0 0 1 .281-.007l2.384 2.407a.193.193 0 0 0 .137.057h4.91a.192.192 0 0 0 .141-.323l-7.572-8.264a.193.193 0 0 0-.286.002l-7.328 8.265z"
        fill="#FFF"
      />
    </G>
  </Svg>
);

export default SvgDai;
