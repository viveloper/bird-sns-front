import Head from 'next/head';
import AppLayout from '../components/AppLayout'

const Profile = () => {
  return (
    <>
      <Head>
        <title>Bird SNS</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.25.3/antd.css" />
      </Head>
      <AppLayout>
        <div>Profile Page</div>
      </AppLayout>
    </>
  );
}

export default Profile;