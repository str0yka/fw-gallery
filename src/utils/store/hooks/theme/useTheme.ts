import { themeSelector } from '../../selectors';
import { useSelector } from '../useSelector';

export const useTheme = () => useSelector(themeSelector.getTheme);
