import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgXpm = props => (
  <Svg height={32} width={32} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} fill="#ffd81b" r={16} />
      <Path
        d="M24 15.562c0 4.423-3.426 5.927-6.31 5.927v1.153h2.225v1.562h-2.224V26h-3.48v-1.796h-2.127v-1.562h2.123v-1.168c-.923 0-6.207-.219-6.207-6.233V8h3.455v7.518c0 3.139 2.766 3.11 2.766 3.11V8h3.47v10.628s2.854.16 2.854-3.153V8H24z"
        fill="#fff"
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

export default SvgXpm;
