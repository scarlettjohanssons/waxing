import PageTitle from '@/components/common/PageTitle';
import { Box, List, ListItem, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { styles } from './style';

type AboutProps = {};

const About: React.FC<AboutProps> = () => {
  return (
    <Box sx={styles.root}>
      <PageTitle title={'About'} />
      <Box padding={'0 20px'} maxWidth={'1200px'} margin={'20px auto'}>
        <Typography variant={'body1'}>
          {`Мати гладку шовковисту шкіру — це невід'ємне бажання будь-якої жінки.
            Для досягнення цієї мети використовують багато різних способів.
            Найпоширеніший з них це епіляція воском і цукровою пастою. Ще їх
            називають ваксинг і шугаринг.`}
        </Typography>
        <Typography variant={'body1'} mt={'20px'}>
          В наш час і з нашим ритмом життя ці способи знають майже всі. Вони
          стали настільки популярні, що людей, які не спробували залишилося дуже
          мало. Багато хто знає і переконаний, що це найгуманніший, лагідний і
          природний вид епіляції. Ви скажете «Так це ж боляче!» Хочу вас
          переконати в зворотному. Якщо ви потрапили в руки до досвідченого
          кваліфікованого майстра, який знає свою справу, то вам нічого боятися.
          Досвідчений майстер завжди підбере правильну техніку, необхідний
          матеріал і працюватиме в ритмі, в якому буде зручно клієнту, а больові
          відчуття наближені до мінімуму або навіть до нулю.
        </Typography>
        <Typography variant={'body1'} mt={'20px'}>
          В наш час і з нашим ритмом життя ці способи знають майже всі. Вони
          стали настільки популярні, що людей, які не спробували залишилося дуже
          мало. Багато хто знає і переконаний, що це найгуманніший, лагідний і
          природний вид епіляції. Ви скажете «Так це ж боляче!» Хочу вас
          переконати в зворотному. Якщо ви потрапили в руки до досвідченого
          кваліфікованого майстра, який знає свою справу, то вам нічого боятися.
          Досвідчений майстер завжди підбере правильну техніку, необхідний
          матеріал і працюватиме в ритмі, в якому буде зручно клієнту, а больові
          відчуття наближені до мінімуму або навіть до нулю.
        </Typography>
        <Typography variant={'body1'} mt={'20px'}>
          Дуже важливо знайти «свого» майстра, «свою» студію. А тим більше в
          такому достатньо інтимному процесі, як шугаринг. Ще не знайшли?
        </Typography>
        <Box mt={'20px'} display={'flex'} gap={'20px'}>
          <Box sx={styles.imageWrapper}>
            <Image
              alt={'image'}
              src={'/about.jpg'}
              width={260}
              height={260}
              placeholder={'blur'}
              quality={75}
              blurDataURL={
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8LwkAAh0BGumlBj4AAAAASUVORK5CYII='
              }
            />
          </Box>
          <Box>
            <Typography variant={'h5'}>Тоді давайте знайомитись</Typography>
            <Typography variant={'body1'} mt={'20px'}>
              Мене звати Катерина. Я — сертифікований майстер воскової та
              цукрової епіляції. Працюю з задоволенням і запрошую всіх дівчаток
              до себе на процедуру краси. Я дуже люблю свою роботу і люблю
              робити шкіру гладенькою. Адже саме після процедури краси ми стаємо
              впевненішими в собі і любимо себе ще більше. До всіх своїх гостей,
              які приходять до мене я ставлюся з особливою турботою і уважністю.
              Я теж дівчинка і знаю як має все статися, щоб було зручно і
              спокійно. Тому намагаюся щоб:
            </Typography>
            <List>
              <ListItem sx={styles.listItem}>
                <Typography variant={'body1'}>
                  обстановка була комфортна
                </Typography>
              </ListItem>
              <ListItem sx={styles.listItem}>
                <Typography variant={'body1'}>
                  чистота кабінету незаперечна
                </Typography>
              </ListItem>
              <ListItem sx={styles.listItem}>
                <Typography variant={'body1'}>
                  якість косметики на найвищому рівні, а розхідники лише
                  одноразові
                </Typography>
              </ListItem>
              <ListItem sx={styles.listItem}>
                <Typography variant={'body1'}>
                  конфіденційність гарантована
                </Typography>
              </ListItem>
              <ListItem sx={styles.listItem}>
                <Typography variant={'body1'}>
                  для кожного свій підхід, адже ми з вами всі різні та
                  індивідуальні
                </Typography>
              </ListItem>
              <ListItem sx={styles.listItem}>
                <Typography variant={'body1'}>
                  робота виконана якісно
                </Typography>
              </ListItem>
              <ListItem sx={styles.listItem}>
                <Typography variant={'body1'}>
                  у пріоритеті не швидкість, а безболісність. Якщо для комфорту
                  клієнта потрібно працювати повільніше, я це зроблю
                </Typography>
              </ListItem>
              <ListItem sx={styles.listItem}>
                <Typography variant={'body1'}>
                  завжди порекомендую домашній догляд за Вашою шкірою. Необхідна
                  косметика завжди є в наявності
                </Typography>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
