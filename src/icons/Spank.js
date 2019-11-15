import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSpank = props => (
  <Svg width={40} height={40} fill="none" viewBox="0 0 40 40" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z"
      fill="#FF3B81"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.717 28.375v.192H7.703V24.93l-.063.202-1.924-.58 1.087-3.505-.134.196L5 20.134l2.086-3.046-.199.158-1.268-1.541 3.002-2.395-.382.146-.723-1.852 3.585-1.355-.42.027-.139-1.977 3.753-.26-.34-.076.453-1.932 3.587.815-.227-.128L18.773 5 21.9 6.778l-.122-.128 1.472-1.353 2.436 2.572-.052-.103 1.81-.87 1.563 3.155-.014-.088 1.987-.311.586 3.645.041-.26 1.99.31-.595 3.699.146-.298 1.81.87-1.675 3.384.246-.26L35 22.098l-2.603 2.749.315-.179 1.006 1.718-3.271 1.86.328-.074.454 1.932-3.616.822.28.02-.141 1.978-3.62-.25.185.07-.723 1.852-3.464-1.31.22.175-1.267 1.541-2.86-2.281.142.206-1.67 1.11-2.045-2.987.062.197-1.926.58-1.069-3.45zm0-2.356l1.257-.38.977 3.15 1.088-.722 1.857 2.714.83-1.01 2.575 2.054.461-1.182 3.104 1.173.09-1.28 3.322.228-.3-1.275 3.257-.74-.675-1.151 2.906-1.653-.996-.914 2.295-2.424-1.224-.59 1.477-2.98-1.34-.21.527-3.273-1.282.199-.525-3.273-1.154.553-1.466-2.959-.94.864-2.267-2.396-.65 1.107-2.87-1.632-.297 1.265-3.23-.735.095 1.321-3.315.228.49 1.259-3.124 1.18.842 1.022-2.621 2.09 1.106.736-1.888 2.759 1.273.384-.986 3.179h1.322l-.001 3.314zm9.356-4.867c.354.266.53.649.53 1.15.017.427-.182.833-.53 1.08-.353.256-.845.383-1.475.383-1.695 0-2.543-.712-2.543-2.135h-2.66c0 .832.213 1.565.637 2.196.43.631 1.052 1.13 1.863 1.497a6.597 6.597 0 002.703.54c1.425 0 2.558-.316 3.4-.947.842-.639 1.264-1.514 1.264-2.631 0-1.002-.344-1.841-1.034-2.515-.689-.672-1.786-1.237-3.295-1.69-.818-.249-1.44-.515-1.863-.797-.418-.284-.627-.636-.627-1.054-.01-.427.191-.832.539-1.08.358-.279.863-.416 1.51-.416.672 0 1.193.165 1.564.495.37.324.556.783.556 1.373h2.65a3.682 3.682 0 00-.6-2.073c-.396-.608-.952-1.077-1.67-1.407-.718-.337-1.536-.505-2.456-.505-.912 0-1.737.153-2.473.46-.73.307-1.292.735-1.687 1.284a3.116 3.116 0 00-.582 1.86c0 1.341.73 2.405 2.19 3.196.536.29 1.262.586 2.182.886.919.295 1.553.578 1.907.85zm8.618-6.756l-2.555 9.344-2.104-.147 1.592-9.633 3.067.436zm-2.893 13.62l.664-3.302-2.82-.682L22 27.198l2.798.817z"
      fill="#fff"
    />
  </Svg>
);

export default SvgSpank;
