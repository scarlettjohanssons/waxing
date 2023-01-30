import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, SwipeableDrawer } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { styles } from './style';

type SideBarCartProps = {
  open: boolean;
  toggleDrawer: (open: boolean) => void;
};

const SideBar: React.FC<SideBarCartProps> = ({ open, toggleDrawer }) => {
  return (
    <SwipeableDrawer
      anchor={'left'}
      PaperProps={{
        sx: styles.drawerPaper,
        elevation: 0,
      }}
      open={open}
      onClose={() => toggleDrawer(false)}
      onOpen={() => toggleDrawer(true)}>
      <Box>
        <Box sx={styles.drawerHead}>
          <Link
            href={'/'}
            style={{ textDecoration: 'none', display: 'flex' }}
            onClick={() => toggleDrawer(false)}>
            <Image src={'/logo.png'} alt="Logo" width={200} height={58.5} />
          </Link>
          <IconButton
            aria-label={'close drawer'}
            onClick={() => toggleDrawer(false)}
            color={'default'}>
            <CloseIcon color={'primary'} />
          </IconButton>
        </Box>
      </Box>
      <Box sx={styles.linkWrapper}>
        <Link
          href={'/'}
          style={styles.link}
          onClick={() => toggleDrawer(false)}>
          Home
        </Link>
        <Link
          href={'/about'}
          style={styles.link}
          onClick={() => toggleDrawer(false)}>
          About
        </Link>
        <Link
          href={'/pricing'}
          style={styles.link}
          onClick={() => toggleDrawer(false)}>
          Pricing
        </Link>
        <Link
          href={'/blog'}
          style={styles.link}
          onClick={() => toggleDrawer(false)}>
          Blog
        </Link>
        <Link
          href={'/contact'}
          style={styles.link}
          onClick={() => toggleDrawer(false)}>
          Contact
        </Link>
      </Box>
    </SwipeableDrawer>
  );
};

export default SideBar;
