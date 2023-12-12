import { ReactNode } from "react";

export type Case = {
  description: string;
  id: number;
  image?: SerializedImage;
  name: string;
};

export type HeroContent = {
  id: number;
  image: SerializedImage;
} & Element;

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