export type PricingState = {
  pricing: IPricingPart[];
  partOfPrice: IPricingPart[] | null;
};

export interface IPricingPart {
  id: number;
  service: string;
  price: number;
  include?: string[];
  part?: string;
}
