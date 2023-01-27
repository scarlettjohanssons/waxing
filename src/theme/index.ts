import { ThemeOptions, createTheme } from '@mui/material/styles';
import { MuiButton } from './components/MuiButton';
import { MuiIconButton } from './components/MuiIconButton';
import { MuiSvgIcon } from './components/MuiSVGIcon';
import { MuiTab } from './components/MuiTab';
import { MuiTypography } from './components/MuiTypography';
import { palette } from './palette';

const themeOptions: Partial<ThemeOptions> = {
  palette,
  components: {
    ...MuiTypography,
    ...MuiButton,
    ...MuiIconButton,
    ...MuiSvgIcon,
    ...MuiTab,
  },
};

export const theme = createTheme(themeOptions);
