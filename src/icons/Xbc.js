import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgXbc = props => (
  <Svg height={40} width={40} viewBox="0 0 40 40" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} fill="#f7931a" r={16} />
      <Path
        d="M25.977 19.754l-.545 2.183-1.455-.362.544-2.184-2.183-.544.363-1.455 2.183.544.545-2.183 1.455.363-.544 2.183 2.183.544-.363 1.456zM20.61 13.76c-.203 1.35-.939 2.006-1.912 2.24 1.331.703 2.005 1.787 1.348 3.677-.816 2.347-2.726 2.555-5.262 2.08l-.63 2.522-1.486-.37.621-2.49a55.255 55.255 0 01-1.184-.307l-.624 2.5-1.484-.37.63-2.528c-.348-.089-.7-.183-1.06-.273l-1.935-.483.748-1.742s1.095.291 1.08.27c.422.103.61-.178.685-.365l.994-3.988.158.039a1.204 1.204 0 00-.155-.05l.71-2.847c.02-.323-.087-.729-.69-.88.024-.015-1.079-.268-1.079-.268l.405-1.624 2.05.512-.002.007c.308.077.626.15.95.223l.623-2.498 1.486.37-.611 2.45c.399.09.8.182 1.19.28l.607-2.433 1.487.37-.623 2.499c1.876.65 3.245 1.633 2.965 3.477zm-3.427 4.885c.491-1.97-2.742-2.46-3.75-2.712L12.6 19.28c1.008.25 4.115 1.253 4.585-.636zm.487-4.896c.446-1.793-2.258-2.177-3.097-2.386l-.757 3.037c.839.21 3.425 1.067 3.854-.651z"
        fill="#fff"
        fillRule="nonzero"
      />
    </G>
  </Svg>
);

export default SvgXbc;
