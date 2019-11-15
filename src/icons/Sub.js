import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgSub = props => (
  <Svg width={40} height={40} viewBox="0 0 40 40" {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#E53431" />
      <Path
        fill="#FFF"
        d="M12.117 5.314a.24.24 0 01.15-.05.25.25 0 01.15.05l1.257.942a.25.25 0 11-.301.4l-1.106-.827L8.67 8.526l15.8 11.854a.252.252 0 010 .403l-1.161.87a.25.25 0 01-.3-.402l.893-.67L8.101 8.729a.248.248 0 010-.4l4.016-3.014zm4.017 0a.247.247 0 01.3-.002l8.035 6.027a.246.246 0 01.086.279.249.249 0 01-.237.172h-4.017a.255.255 0 01-.15-.05l-5.273-3.954a.25.25 0 11.301-.402l5.207 3.904h3.179l-7.28-5.46-5.04 3.78a.25.25 0 11-.301-.402l5.19-3.892zM9.21 10.509a.252.252 0 01.3.402l-.841.63L24.47 23.395a.25.25 0 010 .402l-4.017 3.013a.253.253 0 01-.3 0l-1.163-.872a.251.251 0 01.303-.402l1.01.757 3.6-2.7L8.098 11.742a.253.253 0 010-.402l1.11-.83zm-.959 9.819v.002h4.015a.24.24 0 01.15.05l5.216 3.911a.25.25 0 11-.3.402l-5.146-3.861H9.005l7.281 5.46 5.03-3.772a.251.251 0 01.302.402l-5.181 3.884a.25.25 0 01-.15.05.246.246 0 01-.151-.05l-8.037-6.025a.251.251 0 11.152-.453z"
      />
    </G>
  </Svg>
);

export default SvgSub;
