// library
import { CSSProperties, FC } from "react";

// helpers
import { cleanClassName } from "@/app/helpers";

type LogoProps = {
  className?: string;
  style?: CSSProperties;
};

const Logo: FC<LogoProps> = ({ className, style }) => {
  return (
    <div 
      className={ cleanClassName('logo', undefined, className) } 
      style={ style }
    >
      Logo
    </div>
  )
};

export default Logo;