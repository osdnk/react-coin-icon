import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgDrop = props => (
  <Svg width={40} height={40} viewBox="0 0 40 40" {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} r={16} fill="#242D3D" />
      <G fill="#FFF">
        <Path d="M23.134 17.467c-.551-2.427-2.264-5.103-2.264-5.103 1.974 5.387 1.214 9.45.691 11.755 0 0-.69 2.578.795.43 1.852-2.688.778-7.082.778-7.082z" />
        <Path d="M18.258 7.911c1.027 3.658 1.492 6.763 1.637 9.352.255 4.412-.418 7.315-.836 8.848-.134.499.424.87.749.493l.006-.006c.812-.929 1.196-3.105 1.376-5.015l.052-.627c.168-2.3.07-4.621-.47-6.845-.993-4.104-2.514-6.2-2.514-6.2zm-1.84 6.444c-.25-6.008-.703-11.343-.703-11.343s-.458 5.068-.708 10.942c-.04.953-.076 1.922-.105 2.897-.04 1.417-.058 2.84-.058 4.215.006 2.444.1 4.737.32 6.566.087.725 1.027.725 1.114 0 .151-1.248.238-2.781.273-4.465a123.84 123.84 0 00-.023-5.462c-.03-1.115-.064-2.241-.11-3.35zM9.4 21.594a18.405 18.405 0 01-.094-3.413c.058-.894.186-1.852.407-2.874.203-.935.481-1.916.859-2.949 0 0-1.208 1.887-1.916 3.924-.14.39-.255.79-.343 1.179 0 0-.226 1.022-.26 2.386-.024.946.051 2.066.353 3.123a6.19 6.19 0 00.68 1.573s1.486 2.212.795-.43a19.786 19.786 0 01-.482-2.519z" />
        <Path d="M11.518 20.41a31.681 31.681 0 01.058-3.588 35.673 35.673 0 01.279-2.635c.26-1.881.685-3.965 1.33-6.276 0 0-1.528 2.096-2.52 6.2-.053.22-.1.441-.146.656-.18.894-.296 1.8-.354 2.717-.07 1.15-.052 2.31.03 3.466l.052.633c.18 1.91.557 4.086 1.375 5.015l.006.006c.325.372.888 0 .75-.493-.303-1.132-.75-3.013-.86-5.701z" />
        <Path d="M14.055 20.636a99.317 99.317 0 01-.018-3.994c.012-.876.035-1.8.076-2.769.099-2.502.569-6.119.894-9.184 0 0-1.602 3.315-2.334 9.295-.098.818-.191 1.7-.261 2.653l-.052.708s-.087 1.265-.053 2.972c.047 2.194.29 5.12 1.196 7.036.03.058.064.11.11.15l.006.007c.343.325.871.017.825-.488a81.99 81.99 0 01-.39-6.386zm3.32 0c.03-1.196.041-2.53.018-3.994-.012-.876-.035-1.8-.076-2.769-.098-2.502-.568-6.119-.894-9.184 0 0 1.603 3.315 2.334 9.295.099.818.192 1.7.261 2.653l.053.708s.087 1.265.052 2.972c-.047 2.194-.29 5.12-1.196 7.036a.483.483 0 01-.11.15l-.006.007c-.343.325-.87.017-.824-.488.116-1.097.313-3.274.388-6.386z" />
      </G>
    </G>
  </Svg>
);

export default SvgDrop;
