import { HomeState } from '@/bus/home/typedefs';
import { PricingState } from '@/bus/pricing/typedefs';
import { UiState } from '@/bus/ui/typedefs';

export type RootState = {
  home: HomeState;
  ui: UiState;
  pricing: PricingState;
};
