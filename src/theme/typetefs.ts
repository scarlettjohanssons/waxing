import { Color, PaletteMode } from '@mui/material';
import {
  CommonColors,
  PaletteAugmentColorOptions,
  PaletteColor,
  PaletteTonalOffset,
  TypeAction,
  TypeBackground,
  TypeDivider,
  TypeText,
} from '@mui/material/styles/createPalette';
import React from 'react';

declare module '@mui/material/styles/createTheme' {
  interface Theme {
    palette: {
      common: CommonColors;
      mode: PaletteMode;
      contrastThreshold: number;
      tonalOffset: PaletteTonalOffset;
      primary: PaletteColor;
      secondary: PaletteColor;
      error: PaletteColor;
      warning: PaletteColor;
      info: PaletteColor;
      success: PaletteColor;
      grey: Color;
      text: TypeText;
      divider: TypeDivider;
      action: TypeAction;
      background: TypeBackground;
      getContrastText: (background: string) => string;
      augmentColor: (options: PaletteAugmentColorOptions) => PaletteColor;
    };
  }
}
declare module '@mui/material/styles/createPalette' {
  export interface CommonColors {
    red: string;
    green: string;
    grey: string;
    link: string;
  }

  export interface PaletteOptions {
    common?: Partial<CommonColors>;
  }
}

declare module '@mui/material/styles' {
  export interface TypographyVariantsOptions {
    title?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  export interface TypographyPropsVariantOverrides {
    title: true;
    experience: true;
  }
}
declare module '@mui/material/Button' {
  export interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    tertiary: true;
    contained: true;
    outlined: true;
    smallRadius: true;
    circle: true;
  }
  export interface ButtonPropsColorOverrides {
    green: true;
    primary: true;
    secondary: true;
    successDiscount: true;
  }
}

export type ButtonVariants =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'contained'
  | 'smallRadius'
  | 'circle'
  | 'outlined';

export type ButtonColors =
  | 'green'
  | 'successDiscount'
  | 'secondary'
  | 'primary';

declare module '@mui/material/styles/createTheme' {
  interface Theme {}
}
