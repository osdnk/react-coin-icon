import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgNexo = props => (
  <Svg width={32} height={32} fill="none" viewBox="0 0 32 32" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="#2891F9"
    />
    <Path
      d="M20 12.723l-6 3.46-1 6.24 1 7.617 6-3.465V12.723z"
      fill="#D8EBFD"
    />
    <Path d="M26 9.263l-6 3.46V26.58l6-3.465 1-6.166-1-7.686z" fill="#BEDEFD" />
    <Path
      d="M13.25 9.692a1.5 1.5 0 011.5 0L26 16.187l2 2.963-1 4.965-10.711-4.03L8 12.724l5.25-3.031z"
      fill="#D8EBFD"
    />
    <Path
      d="M26 9.263l5.25 3.027a1.5 1.5 0 01.75 1.3v12.99l-4.468-1.003L26 23.115V9.263z"
      fill="#A9D3FC"
    />
    <Path
      d="M14 16.188L32 26.58l-5.25 3.03a1.5 1.5 0 01-1.5 0L14 23.117l-1-2.998 1-3.93z"
      fill="#BEDEFD"
    />
    <Path
      d="M8 12.723l6 3.46V30.04l-5.25-3.032A1.5 1.5 0 018 25.71V12.723z"
      fill="#fff"
    />
  </Svg>
);

export default SvgNexo;
