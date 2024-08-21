import * as React from "react";
import Svg, { Path } from "react-native-svg";
import colors from "../ui/colors";

export const SVGBacgraund = (props: any) => (
  <Svg xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path fill="#fff" d="M0 0h675v900H0z" />
    <Path
      fill={colors.tercery}
      d="M168.8 900c75.6-52 151.3-104 184-186 32.8-82 22.5-194 69.1-252.4 46.5-58.4 149.8-63.1 253.1-67.8V900Z"
    />

    <Path
      fill={colors.gray}
      d="M253.1 0c-35.3 27.5-70.6 54.9-87.3 95.7-16.6 40.9-14.7 95.1-39.2 123.5C102 247.7 51 250.4 0 253.1V0Z"
    />
    <Path
      fill={colors.gray}
      d="M126.6 0c-10.7 13.7-48.3 27.5-43.7 47.9-8.3 20.4-7.3 47.5-19.6 61.7-12.3 14.2-37.8 15.6-63.3 17V-30Z"
    />
    <Path
      fill={colors.tercery}
      d="M126.6 0c-17.7 13.7-35.3 27.5-43.7 47.9-8.3 20.4-7.3 47.5-19.6 61.7-12.3 14.2-37.8 15.6-63.3 17V0Z"
    />
  </Svg>
);
