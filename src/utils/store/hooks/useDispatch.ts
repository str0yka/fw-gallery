import { useDispatch as useReactReduxDispatch } from 'react-redux';

import type { AppDispatch } from '../store';

export const useDispatch: () => AppDispatch = useReactReduxDispatch;
