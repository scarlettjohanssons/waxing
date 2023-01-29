import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { styles } from './style';

const Footer = () => {
  return (
    <Box sx={styles.root}>
      <Box padding={'0 20px'} maxWidth={'1200px'} margin={'20px auto'}>
        <Box sx={styles.wrapper}>
          <Link href={'/'} style={{ textDecoration: 'none', display: 'flex' }}>
            <Image src={'/logo.png'} alt="Logo" width={200} height={58.5} />
          </Link>
          <Box display={'flex'} gap={'20px'} mt={'10px'}>
            <Link style={styles.link} href={'https://t.me/KatrinKukobko'}>
              <TelegramIcon color={'primary'} fontSize={'small'} />
            </Link>
            <Link
              style={styles.link}
              href={'https://www.facebook.com/katrinshugar/'}>
              <FacebookIcon color={'primary'} fontSize={'small'} />
            </Link>
            <Link
              style={styles.link}
              href={'https://www.instagram.com/katerinakukobko/'}>
              <InstagramIcon color={'primary'} fontSize={'small'} />
            </Link>
          </Box>
        </Box>
        <Box sx={styles.wrapper}>
          <Typography variant={'h5'} mb={'10px'}>
            Contact
          </Typography>
          <Link
            style={styles.link}
            href={'https://goo.gl/maps/ZXwZms5ZQYMrTNwL8'}>
            Київ, вул. Металістів 9
          </Link>
          <Link style={styles.link} href={'mailto:mkg1980@ukr.net'}>
            mkg1980@ukr.net
          </Link>
          <Link style={styles.link} href={'tel:+380973909127'}>
            +38 097 390 9127
          </Link>
        </Box>
        <Box sx={styles.wrapper}>
          <Typography variant={'h5'} mb={'10px'}>
            Opening Hours
          </Typography>
          <Box display={'flex'} gap={'10px'} flexDirection={'column'}>
            <Box display={'flex'}>
              <Typography variant={'body1'} width={'150px'}>
                Monday - Friday:
              </Typography>
              <Typography variant={'body1'}>09:00 AM - 19:00 PM</Typography>
            </Box>
            <Box display={'flex'}>
              <Typography variant={'body1'} width={'150px'}>
                Saturday - Sunday:
              </Typography>
              <Typography variant={'body1'}>10:00 AM - 20:00 PM</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.footer}>
        <Typography variant={'body1'} color={'#FFF'}>
          Copyright © {new Date().getFullYear()} | All rights reserved | Katrin
          Kukobko
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
