import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgOst = props => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#34445B" />
      <G fill="#FFF">
        <Path d="M15.937 10.222l2.01-3.136a2.03 2.03 0 0 0 .83-3.97 2.03 2.03 0 0 0-2.04 3.2l-2.494 3.891a7.96 7.96 0 0 0-7.142 8.707 7.965 7.965 0 0 0 8.706 7.142 7.965 7.965 0 0 0 7.143-8.706 7.967 7.967 0 0 0-7.013-7.128zm-.915 12.122a4.22 4.22 0 0 1-4.224-4.223 4.22 4.22 0 0 1 4.224-4.224 4.22 4.22 0 0 1 3.95 2.732 2.442 2.442 0 0 0-3.424-.433 2.441 2.441 0 0 0-.433 3.424 2.441 2.441 0 0 0 3.849.007 4.214 4.214 0 0 1-3.942 2.717z" />
        <Path d="M15.937 10.222l2.01-3.136a2.03 2.03 0 0 0 .83-3.97 2.03 2.03 0 0 0-2.04 3.2l-2.494 3.891a7.96 7.96 0 0 0-7.142 8.707 7.965 7.965 0 0 0 8.706 7.142 7.965 7.965 0 0 0 7.143-8.706 7.967 7.967 0 0 0-7.013-7.128zm-.915 12.122a4.22 4.22 0 0 1-4.224-4.223 4.22 4.22 0 0 1 4.224-4.224 4.22 4.22 0 0 1 3.95 2.732 2.442 2.442 0 0 0-3.424-.433 2.441 2.441 0 0 0-.433 3.424 2.441 2.441 0 0 0 3.849.007 4.214 4.214 0 0 1-3.942 2.717z" />
      </G>
    </G>
  </Svg>
);

export default SvgOst;
