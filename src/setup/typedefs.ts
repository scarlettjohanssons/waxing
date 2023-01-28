import { HomeState } from '@/bus/home/typedefs';
import { UiState } from '@/bus/ui/typedefs';

export type RootState = {
  home: HomeState;
  ui: UiState;
};
