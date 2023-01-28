import { useStore } from '@/setup/configureStore';
import { Poppins } from '@next/font/google';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  const store1 = useStore(pageProps.initialReduxState);

  return (
    <>
      <Head>
        <title>Шугаринг та воскова епіляція</title>

        <meta
          name="description"
          content="Послуги епіляції з дотриманням всіх гігієнічних норм та бережливого відношення до шкіри. Приємні ціни, абонемент зі знижками, затишний кабінет в салоні краси на Шулявці чекає на вас."
        />

        <meta property="og:url" content="http://epilstudio.com.ua/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Шугаринг та воскова епіляція" />
        <meta
          property="og:description"
          content="Послуги епіляції з дотриманням всіх гігієнічних норм та бережливого відношення до шкіри. Приємні ціни, абонемент зі знижками, затишний кабінет в салоні краси на Шулявці чекає на вас."
        />
        <meta
          property="og:image"
          content="http://epilstudio.com.ua/openGraph.jpeg"
        />
        <meta
          property="og:image:secure_url"
          content="http://epilstudio.com.ua/openGraph.jpeg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="epilstudio.com.ua" />
        <meta property="twitter:url" content="http://epilstudio.com.ua/" />
        <meta name="twitter:title" content="Шугаринг та воскова епіляція" />
        <meta
          name="twitter:description"
          content="Послуги епіляції з дотриманням всіх гігієнічних норм та бережливого відношення до шкіри. Приємні ціни, абонемент зі знижками, затишний кабінет в салоні краси на Шулявці чекає на вас."
        />
        <meta
          name="twitter:image"
          content="http://epilstudio.com.ua/openGraph.jpeg"
        />
      </Head>
      <Provider store={store1}>
        <main className={poppins.className}>
          <Component {...pageProps} />
        </main>
      </Provider>
    </>
  );
};

export default MyApp;
