// types
import { ReactNode } from "react";

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
  image?: SerializedImage;
  text: string;
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
  name: string;
};

export type Theme = {
  backgroundColor?: string;
  className?: string;
  color?: string;
};