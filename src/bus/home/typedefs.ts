export type HomeState = {
  advices: IAdvice[];
  currentAdvice: any | null;
};

export interface IAdvice {
  id: number;
  text: string;
  title: string;
  body: string;
  body2?: string;
  body3?: string;
  body4?: string;
  list?: string[];
  image: any;
}
