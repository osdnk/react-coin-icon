import React from "react";
import Svg, { G, Circle, Path } from "react-native-svg";

const SvgAywa = props => (
  <Svg width={40} height={40} viewBox="0 0 40 40" {...props}>
    <G fill="none" fillRule="evenodd">
      <Circle cx={16} cy={16} r={16} fill="#3355B5" fillRule="nonzero" />
      <G fill="#FFF">
        <Path
          d="M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12 12-5.373 12-12A12 12 0 0016 4zm0 23.77C9.5 27.77 4.23 22.5 4.23 16S9.5 4.23 16 4.23 27.77 9.5 27.77 16A11.77 11.77 0 0116 27.77z"
          fillRule="nonzero"
        />
        <Path d="M19.29 13.5l-.03-.11-.03-.11-.03-.12-.04-.1-.03-.11-.04-.1-.05-.11-.04-.1-.05-.09-.05-.1-.05-.09-.06-.09-.05-.08-.06-.09-.06-.07-.07-.08-.06-.07-.06-.07-.07-.06-.07-.06-.07-.06-.07-.05-.08-.05-.07-.04-.08-.05-.07-.03-.08-.04-.08-.03-.08-.03-.09-.02-.08-.02-.08-.02-.09-.01-.09-.01-.08-.01h-.27l-.09.01-.09.01-.1.01-.09.02-.09.02-.09.02-.1.03-.09.03-.1.03-.1.04-.09.04-.1.05-.09.04-.1.05-.1.06-.09.05-.1.06-.1.07-.09.06-.1.07-.1.08-.1.07-.09.08-.1.08-.09.09-.1.09-.1.09-.09.1-.1.1-.09.1-.09.1-.1.11-.09.11-.09.11-.09.12-.09.12-.09.13-.12.17-.12.18-.12.19-.11.18-.11.2-.11.19-.1.19-.1.2-.09.2-.09.2-.08.2-.07.16 7.19-2.35zm-6.49 3.51l6.37-.05.03-.14.03-.14.03-.14.03-.15.02-.14.03-.14.02-.14.01-.14.02-.14.01-.14.01-.13.01-.14.01-.14v-.29z" />
        <Path
          d="M16 4.56C9.682 4.56 4.56 9.682 4.56 16S9.682 27.44 16 27.44 27.44 22.318 27.44 16A11.44 11.44 0 0016 4.56zm6.48 12.36l-.2 1.18h-1.79l-.06.2-.11.3-.11.3-.12.3-.09.3-.13.29-.14.29-.14.29-.15.28-.15.28-.16.27-.16.27-.17.27-.2.26-.09.13-.09.13-.93-1.56.09-.13.09-.13.08-.13.08-.13.08-.13.08-.13.08-.13.07-.13.07-.14.07-.14.07-.14.07-.14.06-.14.06-.14.06-.14.06-.14.06-.14.05-.14v-.12l-7.27.06v1.85l-1.86 1.29V18.2H9.1l-.2.07-.34-1.19 1.68-.55v-.13l.07-.21.1-.19.07-.2.08-.2.08-.2.08-.2.08-.2.09-.2.09-.2.09-.2.09-.19.1-.19.1-.19.1-.19.1-.19.11-.19.11-.18.11-.18.11-.19.11-.18.12-.17.12-.17.11-.19.12-.17.12-.16.13-.16.17-.14.13-.15.13-.15.13-.15.14-.14.14-.14.14-.14.14-.13.14-.13.14-.13.11-.11.15-.12.15-.11.15-.11.15-.11.15-.1.15-.09.15-.09.15-.08.15-.08.13-.11.18-.05.14-.06.14-.06.14-.05h2.41l.11.05.11.05.11.06.11.06.1.07.1.07.1.08.1.08.09.09.09.09.09.1.09.1.08.11.08.11.08.11.08.12.07.12.07.13.07.13.06.14.06.14.06.14.06.15.05.15V13l1-.32.34 1.19-1.28.42v1.63l-.05.3-.06.3-.07.3v.13l1.75-.03z"
          fillRule="nonzero"
        />
      </G>
    </G>
  </Svg>
);

export default SvgAywa;
