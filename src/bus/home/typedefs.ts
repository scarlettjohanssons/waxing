export type HomeState = {
  advices: IAdvice[];
  currentAdvice: any | null;
};

export interface IAdvice {
  id: number;
  text: string;
  title: string;
  body: string;
  body2: string | null;
  body3: string | null;
  body4: string | null;
  list: string[] | null;
  image: any;
}
