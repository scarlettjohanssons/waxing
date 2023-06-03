import { uiActions } from '@/bus/ui/actions';
import { getIsSidebarOpen } from '@/bus/ui/selectors';
import SideBar from '@/components/common/SideBar';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Box, IconButton, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { styles } from './style';

const Header = () => {
  const isMobile = useMediaQuery('(max-width: 720px)');
  const isSideBarOpen = useSelector(getIsSidebarOpen);
  const dispatch = useDispatch();

  const toggleDrawer = (open: boolean) => {
    dispatch(uiActions.setSidebarOpen(open));
  };

  return (
    <>
      <Box sx={styles.header}>
        <Box
          maxWidth={'1200px'}
          margin={'0 auto'}
          display={'flex'}
          justifyContent={'space-between'}>
          <Box display={'flex'} gap={'15px'}>
            <Box display={'flex'} alignItems={'center'} gap={'5px'}>
              <LocationOnIcon fontSize={'small'} htmlColor={'#EBE7E5'} />
              <Link
                style={{ ...styles.link, color: '#EBE7E5' }}
                href={'https://goo.gl/maps/ZXwZms5ZQYMrTNwL8'}>
                Київ, вул. Металістів 9
              </Link>
            </Box>
            <Box display={'flex'} alignItems={'center'} gap={'5px'}>
              <EmailIcon fontSize={'small'} htmlColor={'#EBE7E5'} />
              <Link
                style={{ ...styles.link, color: '#EBE7E5' }}
                href={'mailto:mkg1980@ukr.net'}>
                mkg1980@ukr.net
              </Link>
            </Box>
            <Box display={'flex'} alignItems={'center'} gap={'5px'}>
              <PhoneIcon fontSize={'small'} htmlColor={'#EBE7E5'} />
              <Link
                style={{ ...styles.link, color: '#EBE7E5' }}
                href={'tel:+380973909127'}>
                +38 097 390 9127
              </Link>
            </Box>
          </Box>
          <Box display={'flex'} alignItems={'center'} gap={'15px'}>
            <Link style={styles.link} href={'https://t.me/KatrinKukobko'}>
              <TelegramIcon fontSize={'small'} htmlColor={'#EBE7E5'} />
            </Link>
            <Link
              style={styles.link}
              href={'https://www.facebook.com/katrinshugar/'}>
              <FacebookIcon fontSize={'small'} htmlColor={'#EBE7E5'} />
            </Link>
            <Link
              style={styles.link}
              href={'https://www.instagram.com/katerinakukobko/'}>
              <InstagramIcon fontSize={'small'} htmlColor={'#EBE7E5'} />
            </Link>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.root}>
        {!isMobile && (
          <Box display={'flex'} gap={'20px'}>
            <Link href={'/'} style={styles.link}>
              Home
            </Link>
            <Link href={'/about'} style={styles.link}>
              About
            </Link>
          </Box>
        )}
        <Link href={'/'} style={{ textDecoration: 'none', display: 'flex' }}>
          <Image
            src={`/logo.png`}
            // src={`${path}/logo.png`}
            alt="Logo"
            width={200}
            height={58.5}
          />
        </Link>
        {isMobile ? (
          <>
            <IconButton onClick={() => toggleDrawer(true)} color={'default'}>
              <MenuIcon color={'primary'} />
            </IconButton>
            <SideBar open={isSideBarOpen} toggleDrawer={toggleDrawer} />
          </>
        ) : (
          <Box display={'flex'} gap={'20px'}>
            <Link href={'/pricing'} style={styles.link}>
              Pricing
            </Link>
            <Link href={'/contact'} style={styles.link}>
              Contact
            </Link>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Header;
