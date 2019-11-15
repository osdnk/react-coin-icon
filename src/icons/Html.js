import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgHtml = props => (
  <Svg height={40} width={40} viewBox="0 0 40 40" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} fill="#cfa967" r={16} />
      <Path
        d="M16.02 16.945v7.993l5.947-1.602 1.397-15.39H16.02v6.532l.304-.947h.796zm-7.384 7.524L7 6.5h18l-1.636 17.969L15.98 26.5zm5.163-6.793v-.741l-2.469-.984 2.47-.99v-.742l-3.527 1.433v.592zm7.933-1.432l-3.527 1.432v-.741l2.47-.987-2.47-.987v-.742l3.527 1.433zm-5.712.7v-2.466l-1.317 4.107h.788z"
        fill="#fff"
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

export default SvgHtml;
