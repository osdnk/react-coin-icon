import React from "react";
import Svg, { G, Circle, Path } from "svgs";
const Bcd = props => (
  <Svg viewBox="0 0 32 32" height={32} width={32} {...props}>
    <G fill="none">
      <Circle cx={16} cy={16} fill="#fcc339" r={16} />
      <Path
        d="M22.585 9.694l.077.171-3.054 1.402 1.374 4.55 4.521-2.283.06.119.018-.022-2.929-3.906zm-.165-.077l-2.773-1.29h-7.171l-2.962 1.36 3.08 1.296h6.85zm-13.154.32l-2.773 3.601 4.514 2.28 1.38-4.568zm3.44 1.373l-1.425 4.72 4.713 8.332 4.714-8.332-1.426-4.72zm12.512 2.733L21 16.174l-4.205 7.433zm-10.047 9.524l-4.182-7.393-4.196-2.119zm-8.74-9.924l.033-.067-.043.056zm2.791-4.181L12.405 8h7.312l3.144 1.462L26 13.648 16 25 6 13.646zm9.201 5.372c.059.607-.192.972-.594 1.179.661.16 1.075.558.993 1.45-.1 1.106-.915 1.402-2.079 1.47v1.163h-.692v-1.147c-.18 0-.363-.002-.553-.006v1.153h-.691V18.93c-.162-.001-.327-.004-.495-.004h-.9l.137-.837s.512.008.503 0c.196 0 .248-.143.26-.232V16.02h.074a.55.55 0 0 0-.074-.005v-1.311c-.026-.143-.117-.307-.398-.308.009-.01-.502 0-.502 0v-.748h.954v.004c.144 0 .29-.003.44-.006v-1.151h.693v1.129c.184-.004.37-.008.552-.008v-1.12l.692-.001v1.151c.894.08 1.601.358 1.68 1.188zm-.968 2.49c0-.908-1.471-.771-1.94-.771v1.543c.469 0 1.94.098 1.94-.772zm-.322-2.177c0-.826-1.228-.7-1.618-.7v1.4c.39 0 1.618.092 1.618-.7z"
        fill="#fff"
      />
    </G>
  </Svg>
);

export default Bcd;
