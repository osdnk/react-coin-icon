import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgPpt = props => (
  <Svg width={40} height={40} viewBox="0 0 40 40" {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#152743" />
      <Path
        fill="#FFF"
        d="M16.049 8.316c-1.316 0-2.383-.733-2.383-1.638 0-.905 1.067-1.638 2.383-1.638s2.382.733 2.382 1.638c0 .905-1.066 1.638-2.382 1.638zM14.816 26.6V9.104h5.312c.197 0 .336.147.336.344v9.708c0 .196-.14.364-.336.364H17.2v7.08c0 .197-.15.376-.347.376h-1.668a.384.384 0 01-.369-.375zm-.896-7.081h-2.01a.378.378 0 01-.374-.364V9.448c0-.197.177-.344.373-.344h2.011V19.52z"
      />
    </G>
  </Svg>
);

export default SvgPpt;
