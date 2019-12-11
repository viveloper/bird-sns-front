import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import PropTypes from 'prop-types';

const Bird = props => {
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <title>Bird SNS</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.25.3/antd.css" />
      </Head>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </>
  );
}

Bird.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object  
}

export default Bird;