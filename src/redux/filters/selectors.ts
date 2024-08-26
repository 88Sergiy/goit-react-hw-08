import { RootState } from '../store';

export const selectFilterValue = (state: RootState) => state.filters.value;