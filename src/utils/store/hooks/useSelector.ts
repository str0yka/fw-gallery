import type { TypedUseSelectorHook } from 'react-redux';
import { useSelector as useReactReduxSelector } from 'react-redux';

import type { RootState } from '../store';

export const useSelector: TypedUseSelectorHook<RootState> = useReactReduxSelector;
