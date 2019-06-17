import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgUsdc = props => (
  <Svg width={32} height={32} viewBox="0 0 32 32" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle fill="#2775CA" cx={16} cy={16} r={16} />
      <Path
        d="M20.386 18.38c0 1.778-1.321 3.215-3.386 3.543v1.58a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.501-.5v-1.58c-2.182-.297-3.25-1.519-3.54-3.182a.466.466 0 0 1 .462-.541h1.14c.239 0 .44.173.49.406.211.988.788 1.753 2.532 1.753 1.29 0 2.207-.72 2.207-1.799s-.538-1.488-2.435-1.798c-2.796-.375-4.12-1.224-4.12-3.415 0-1.694 1.28-3.013 3.264-3.294v-1.55a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .501.5v1.593c1.61.287 2.636 1.201 2.969 2.725a.467.467 0 0 1-.46.556h-1.051a.504.504 0 0 1-.48-.368c-.285-.963-.973-1.382-2.172-1.382-1.325 0-2.011.638-2.011 1.537 0 .947.394 1.422 2.42 1.716 2.748.376 4.17 1.164 4.17 3.5zm-7.815 7.015c.239.089.43.376.43.632v.932c0 .379-.295.592-.656.478-4.84-1.547-8.346-6.08-8.346-11.434 0-5.354 3.505-9.887 8.346-11.436.36-.114.655.099.655.477v.932c0 .254-.19.544-.43.63C8.742 8.011 6 11.691 6 16c0 4.31 2.741 7.993 6.57 9.395zm7.086-20.826c4.838 1.547 8.345 6.08 8.345 11.434 0 5.354-3.505 9.887-8.345 11.434-.361.114-.656-.1-.656-.478v-.932a.67.67 0 0 1 .43-.63c3.83-1.404 6.57-5.084 6.57-9.394 0-4.31-2.74-7.992-6.57-9.394-.24-.087-.43-.376-.43-.63v-.932c0-.379.295-.592.656-.478z"
        fill="#FFF"
      />
    </G>
  </Svg>
);

export default SvgUsdc;
