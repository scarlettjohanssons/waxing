import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import { theme } from '@/theme';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'space-between'}
        minHeight={'100vh'}>
        <Box>
          <Header />
          {children}
        </Box>
        <Footer />
      </Box>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default AppLayout;
