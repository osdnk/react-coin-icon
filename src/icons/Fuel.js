import React from "react";
import Svg, { G, Circle, Path } from "svgs";
const Fuel = props => (
  <Svg viewBox="0 0 32 32" height={32} width={32} {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} fill="#4096d0" r={16} />
      <Path
        d="M25.532 10h-6.495l-1.926 4.83h-6.074v-2.487h6.074L18 10H8.802a.43.43 0 0 0-.432.427v4.402H6.89L6 17.171h2.37v4.397c0 .238.196.432.438.432h4.451l.889-2.341h-3.111V17.17h5.037L14.148 22h2.963l2.074-4.83h6.38c.24 0 .435-.192.435-.429v-6.28a.465.465 0 0 0-.468-.461zm-2.05 4.46c0 .204-.167.37-.374.37h-3.034l1.037-2.486h1.995c.207-.001.376.164.377.368z"
        fill="#fff"
      />
    </G>
  </Svg>
);

export default Fuel;
