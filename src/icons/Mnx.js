import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgMnx = props => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} r={16} fill="#00ADEF" fillRule="nonzero" />
      <Path
        fill="#FFF"
        d="M14.863 26.986C9.32 26.405 5 21.708 5 16c0-5.708 4.32-10.405 9.863-10.986v3.37A7.7 7.7 0 0 0 8.336 16a7.7 7.7 0 0 0 6.527 7.616v3.37zM17.038 5c5.23.479 9.403 4.617 9.948 9.837h-3.363a7.7 7.7 0 0 0-6.585-6.474V5zM27 17.017c-.482 5.29-4.684 9.5-9.962 9.983v-3.363a7.7 7.7 0 0 0 6.606-6.62H27z"
      />
    </G>
  </Svg>
);

export default SvgMnx;
