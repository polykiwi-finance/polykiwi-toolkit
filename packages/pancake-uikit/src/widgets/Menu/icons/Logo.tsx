import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";
import getConfig from "../../../util/getConfig";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const config = getConfig();
  // @ts-ignore
  const logoLight = config.images !== undefined ? config.images?.find((image) => image.name === 'header-logo-light').image?.publicUrl : '';
  // @ts-ignore
  const logoDark = config.images !== undefined ? config.images?.find((image) => image.name === 'header-logo-dark').image?.publicUrl : '';
  //@ts-ignore
  const logo = !isDark ? <img src={logoLight} alt="polykiwi logo" style={{height: '26px'}}/> : <img src={logoDark} alt="polykiwi logo" style={{height: '26px'}}/>

  return logo;
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
