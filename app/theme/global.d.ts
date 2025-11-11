import 'styled-components';
import { lightTheme } from './theme';

type AppTheme = typeof lightTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
