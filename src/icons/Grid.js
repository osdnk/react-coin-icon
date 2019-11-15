import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgGrid = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="#53B7E8"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M33.31 15.94v-1.69h-1.25v1.69h-1.69v1.25h1.69v1.69h1.25v-1.69H35v-1.25h-1.69zm-12.602 2.72c0-1.702-1.236-2.754-3.09-2.754h-2.723v7.623h1.497v-2.18h1.312l1.486 2.18h1.767l-1.746-2.515.097-.048c.884-.454 1.4-1.259 1.4-2.306zm-8.202-2.041c-.297-.194-1.074-.688-2.512-.688-2.34 0-3.994 1.665-3.994 3.805 0 2.139 1.654 3.793 3.962 3.793 1.55 0 2.424-.558 2.825-.864v-2.919h-1.37v2.192l-.09.041a3.223 3.223 0 01-1.28.244c-1.402 0-2.54-1.012-2.54-2.487 0-1.476 1.085-2.445 2.55-2.445 1.022 0 1.644.38 1.834.506l.643-1.16-.028-.018zm11.774-.713v7.623h-1.496v-7.623h1.497zm5.175 1.323v-1.323h-2.88v7.623h2.938c2.112 0 3.651-1.154 3.818-3.01.017-.183 0-.737 0-.737h-1.396s-.014.555-.039.737c-.143 1.067-1.155 1.687-2.448 1.687H28.07V17.23h1.384zm-11.957-.011h-1.106v2.82h1.095c1.009 0 1.67-.543 1.67-1.378 0-.91-.672-1.442-1.659-1.442z"
      fill="#fff"
    />
  </Svg>
);

export default SvgGrid;
