import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgXmr = props => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} r={16} fill="#F60" />
      <Path
        fill="#FFF"
        fillRule="nonzero"
        d="M15.97 5.235c5.985 0 10.825 4.84 10.825 10.824a11.07 11.07 0 0 1-.558 3.432h-3.226v-9.094l-7.04 7.04-7.04-7.04v9.094H5.704a11.07 11.07 0 0 1-.557-3.432c0-5.984 4.84-10.824 10.824-10.824zM14.358 19.02L16 20.635l1.613-1.614 3.051-3.08v5.72h4.547a10.806 10.806 0 0 1-9.24 5.192c-3.902 0-7.334-2.082-9.24-5.192h4.546v-5.72l3.08 3.08z"
      />
    </G>
  </Svg>
);

export default SvgXmr;
