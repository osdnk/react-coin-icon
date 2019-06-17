import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgKmd = props => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} r={16} fill="#326464" />
      <Path
        fill="#FFF"
        d="M16 5l7.482 3.207c.223.095.4.275.494.5L27 16l-3.023 7.38a.932.932 0 0 1-.504.506L16 27l-7.473-3.114a.932.932 0 0 1-.504-.507L5 16l3.024-7.294a.932.932 0 0 1 .494-.5L16 5zm0 4.475l-4.568 1.957L9.475 16l1.957 4.568L16 22.525l4.568-1.957L22.525 16l-1.957-4.568L16 9.475zm0 1.957l3.263 1.305L20.568 16l-1.305 3.263L16 20.568l-3.263-1.305L11.432 16l1.305-3.263L16 11.432z"
      />
    </G>
  </Svg>
);

export default SvgKmd;
