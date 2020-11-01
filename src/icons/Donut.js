import React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";
const SvgDonut = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path d="M0 0h40v40H0V0z" fill="url(#donut_svg__pattern0)" />
    <Defs>
      <Pattern
        id="donut_svg__pattern0"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use
          xlinkHref="#donut_svg__image0"
          transform="translate(.002) scale(.0021)"
        />
      </Pattern>
      <Image
        id="donut_svg__image0"
        width={475}
        height={477}
      />
    </Defs>
  </Svg>
);
export default SvgDonut;