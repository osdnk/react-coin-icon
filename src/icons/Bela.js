import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgBela = props => (
  <Svg height={40} width={40} viewBox="0 0 40 40" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} fill="#13a0f6" r={16} />
      <Path
        d="M8.297 11.568A2.422 2.422 0 017 9.422a2.416 2.416 0 114.553-1.134 8.891 8.891 0 014.501-1.216c4.94 0 8.946 4.014 8.946 8.964S20.995 25 16.054 25s-8.946-4.013-8.946-8.964a8.94 8.94 0 011.189-4.468zm7.757 8.878c2.43 0 4.4-1.974 4.4-4.41s-1.97-4.41-4.4-4.41-4.4 1.975-4.4 4.41 1.97 4.41 4.4 4.41z"
        fill="#fff"
      />
    </G>
  </Svg>
);

export default SvgBela;
