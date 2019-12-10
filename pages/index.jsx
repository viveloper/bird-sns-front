import Head from 'next/head';
import Link from 'next/link';
import AppLayout from '../components/AppLayout'

const Home = () => {
  return (
    <>
    <Head>
      <title>Bird SNS</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.25.3/antd.css"/>
    </Head>
      <AppLayout>
        <Link href="/about"><a>about</a></Link>
        <div>Hello, Next!</div>
      </AppLayout>
    </>
  );
}

export default Home;