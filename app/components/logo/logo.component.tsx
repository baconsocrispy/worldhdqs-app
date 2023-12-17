// library
import { CSSProperties, FC } from "react";

type LogoProps = {
  className?: string;
  style?: CSSProperties;
};

const Logo: FC<LogoProps> = ({ className, style }) => {
  return (
    <div className={ `logo ${ className ?? '' }`} style={ style }>
      Logo
    </div>
  )
};

export default Logo;