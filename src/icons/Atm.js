import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgAtm = props => (
  <Svg height={40} width={40} viewBox="0 0 40 40" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} fill="#346fce" r={16} />
      <Path
        d="M20.16 18.706l.956 1.797a4.369 4.369 0 01-1.806 5.908l-.124.066a4.369 4.369 0 01-5.909-1.806l-3.223-6.062a4.369 4.369 0 011.592-5.787l-.956-1.797a4.369 4.369 0 011.807-5.908l.124-.066a4.369 4.369 0 015.908 1.806l3.223 6.062a4.369 4.369 0 01-1.591 5.787zm0 0l-2.267-4.265a4.369 4.369 0 00-5.908-1.806l-.124.065c-.073.04-.145.08-.215.122l2.268 4.265a4.369 4.369 0 005.908 1.806l.124-.065c.073-.04.145-.08.215-.122z"
        fill="#fff"
      />
    </G>
  </Svg>
);

export default SvgAtm;
