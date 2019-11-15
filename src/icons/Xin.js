import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgXin = props => (
  <Svg width={40} height={40} viewBox="0 0 32 32" {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#1EB5FA" />
      <Path
        d="M26.405 7.151l-3.63 1.61a.673.673 0 00-.35.59v12.98a.66.66 0 00.36.59l3.63 1.57a.338.338 0 00.5-.3V7.451a.35.35 0 00-.51-.3zM9.02 8.741l-3.52-1.6a.338.338 0 00-.5.3v16.74a.341.341 0 00.52.29l3.54-1.87a.667.667 0 00.32-.57v-12.7a.7.7 0 00-.36-.59zm11.04 4.43l-3.79-2.17a.668.668 0 00-.67 0l-3.86 2.15a.684.684 0 00-.34.59v4.4c0 .243.13.468.34.59l3.86 2.22c.207.12.463.12.67 0l3.79-2.2a.684.684 0 00.34-.59v-4.4a.672.672 0 00-.34-.59z"
        fill="#FFF"
      />
    </G>
  </Svg>
);

export default SvgXin;