// types
import { MutableRefObject, ReactNode } from "react";

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
  href?: string;
  image?: SerializedImage;
  title: string;
  highlight?: string;
};

export type HeroContent = {
  component: ReactNode;
  theme?: Theme;
};

export type IntersectionObserverOptions = {
  intersectionObserverInit?: IntersectionObserverInit;
  intersectionTarget?: MutableRefObject<HTMLElement | null>;
  transitionClass?: string;
  transitionDelay?: number;
  transitionRepeat?: boolean;
};

export type Link = {
  href: string;
  text: string;
  newTab?: boolean;
};

export type ListItem = {
  href?: string;
  image?: SerializedImage;
  newTab?: boolean;
  text?: string;
  textHighlight?: string;
};

export type Logo = {
  id: number;
  image: SerializedImage;
  name: string;
};

export type SerializedImage = {
  alt?: string;
  id: number;
  invert?: boolean;
  src: string;
  title?: string;
};

export type Service = {
  description: string;
  highlight?: string;
  href?: string;
  id: number;
  image?: SerializedImage;
  title: string;
};

export type Skill = {
  id: number; 
  images: SerializedImage[];
  text: string;
  title: string;
};

export type SubmitResponse = {
  message: string;
  success?: boolean;
};

export type Theme = {
  backgroundColor?: string;
  className?: string;
  color?: string;
};