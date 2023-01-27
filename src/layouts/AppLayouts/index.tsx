import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { theme } from '@/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {children}
      <Footer />
      <CssBaseline />
    </ThemeProvider>
  );
};

export default AppLayout;
