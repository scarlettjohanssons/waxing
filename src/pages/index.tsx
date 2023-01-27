import BookNow from '@/components/home/BookNow';
import Greeting from '@/components/home/Greeting';
import OurServices from '@/components/home/OurServices';
import Story from '@/components/home/Story';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import AppLayout from '@/layouts/AppLayouts';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <AppLayout>
      <Box padding={'0 20px'} maxWidth={'1200px'} margin={'20px auto'}>
        <Greeting />
        <Story />
        <OurServices />
      </Box>
      <BookNow />
      <Box padding={'0 20px'} maxWidth={'1200px'} margin={'20px auto'}>
        <WhyChooseUs />
        {/*<OurAdvices />*/}
      </Box>
    </AppLayout>
  );
};

export default Home;
