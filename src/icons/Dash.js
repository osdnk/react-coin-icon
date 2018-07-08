import React from "react";
import Svg, { G, Circle, Path } from "svgs";
const Dash = props => (
  <Svg viewBox="0 0 32 32" width={32} height={32} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} r={16} fill="#1C75BC" />
      <Path
        fill="#FFF"
        d="M26.571 12.971l-2.038 6.381s-1.257 3.181-4.247 3.181H5.866l1.03-3.18h13.066l2.057-6.382H8.971l1.01-3.18h14.343c3.143 0 2.247 3.18 2.247 3.18zm-20.19 1.715h7.733l-.99 2.952H5.37l1.01-2.952z"
      />
    </G>
  </Svg>
);

export default Dash;
