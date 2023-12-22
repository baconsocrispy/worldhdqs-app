// types
import { ReactNode } from "react";

export type AnimationOptions = {
  backgroundColor?: string; // i.e. 'teal'
  blur?: string; // i.e '5px'
  color?: string; // i.e. 'white'
  opacity?: string; // i.e. '1'
  translateX?: number; // %
  translateY?: number; // %
  transitionDelay?: number; // s
  transitionDuration?: string; // i.e. '5s'
  transitionFunction?: string; // i.e 'ease-in-out'
}

export type Case = {
  description: string;
  id: number;
  image?: SerializedImage;
  name: string;
};

export type HeroContent = {
  component: ReactNode;
  theme?: Theme;
};

export type ListItem = {
  href?: string;
  image?: SerializedImage;
  text?: string;
  textHighlight?: string;
};

export type Logo = {
  id: number;
  image: SerializedImage;
  name: string;
};

export type SerializedImage = {
  id: number;
  src: string;
};

export type Service = {
  description: string;
  id: number;
  image?: SerializedImage;
  name: string;
};

export type Skill = {
  id: number; 
  logo: SerializedImage;
  name?: string;
};

export type Theme = {
  backgroundColor?: string;
  className?: string;
  color?: string;
};