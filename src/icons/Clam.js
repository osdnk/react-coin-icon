import React from "react";
import Svg, { G, Circle, Path } from "svgs";
const Clam = props => (
  <Svg viewBox="0 0 32 32" height={32} width={32} {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} fill="#20c5d3" r={16} />
      <Path
        d="M17.81 7.87v-.089c.177-.075.528-.146 1.132.016.691.186 1.225.88 1.47 1.254l-.002.24c-.012 1.339-.438 4.647-1.176 7.127-.645 2.167-2.052 5.05-2.338 5.626a3.558 3.558 0 0 0-.426-.067c.119-.731.638-3.987.965-6.954.347-3.148.374-6.27.374-7.152zm2.899 1.424v-.011c.26-.006.836.041 1.493.464.636.409.964 1.187 1.1 1.605l-.063.247c-.155.602-1.303 3.705-2.538 6.044-1.048 1.982-2.721 4.175-3.086 4.645a3.27 3.27 0 0 0-.425-.167c.34-.687 1.697-3.491 2.33-5.62.746-2.506 1.176-5.852 1.189-7.207zm.257 8.484c1.176-2.227 2.364-5.352 2.56-6.097.259.094.815.343 1.177.837.31.422.411.993.444 1.352l-.121.282c-.234.543-1.66 3.045-3.097 4.828-1.244 1.544-3.113 3.376-3.561 3.81a3.167 3.167 0 0 0-.488-.36c.421-.544 2.053-2.697 3.086-4.652zm-9.961-8.252l-.035-.274c.163-.355.523-.947 1.212-1.262.75-.342 1.333-.249 1.594-.173l.002.059c.02.595.177 3.524.56 6.981.352 3.163.919 6.527 1.028 7.166-.15.027-.297.064-.441.11-.278-.59-1.516-3.27-2.348-5.955-.928-2.995-1.46-5.775-1.572-6.652zm3.071-1.66l-.004-.137c.274-.246.912-.729 1.71-.729.796 0 1.448.483 1.729.73v.14c0 .879-.027 3.988-.373 7.12-.331 3.004-.86 6.307-.968 6.971l-.078-.002c-.144 0-.287.008-.43.022-.106-.615-.675-3.987-1.027-7.156-.382-3.448-.538-6.367-.559-6.96zm2.016 14.387c1.617 0 2.362.981 2.587 1.355-1.225.86-2.222 1.392-2.574 1.392-.352 0-1.227-.44-2.603-1.435.22-.355.962-1.312 2.59-1.312zm9.201-7.968c.246.16.751.591.704 1.42-.062 1.092-1.935 3.256-4.287 5.445a29.17 29.17 0 0 1-2.79 2.287 3.089 3.089 0 0 0-.341-.439c.456-.441 2.332-2.28 3.584-3.835 1.44-1.786 2.873-4.295 3.13-4.878zM6.82 14.073a13.898 13.898 0 0 1-.207-.547 1.96 1.96 0 0 1 .23-.929c.342-.62 1.21-.904 1.554-.995l.002.006.037.13c.25.871.834 2.912 2.372 5.862 1.373 2.633 2.865 4.453 3.283 4.94a3.11 3.11 0 0 0-.32.251 33.811 33.811 0 0 1-3.909-3.996c-1.482-1.792-2.505-3.38-3.042-4.722zm6.74 8.928c-.11.12-.21.25-.3.388a45.838 45.838 0 0 1-2.53-2.03c-3.012-2.575-4.66-4.366-4.726-5.497-.05-.863.388-1.35.6-1.533.562 1.337 1.578 2.9 3.026 4.652A34.204 34.204 0 0 0 13.56 23zM8.687 11.527a10.296 10.296 0 0 1-.092-.335c.077-.366.267-.914.732-1.252a2.169 2.169 0 0 1 1.378-.411l.005.034c.113.885.648 3.688 1.582 6.7.828 2.671 2.053 5.337 2.353 5.975a3.177 3.177 0 0 0-.298.144c-.365-.422-1.879-2.243-3.272-4.916-1.525-2.924-2.103-4.945-2.35-5.808z"
        fill="#fff"
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

export default Clam;
