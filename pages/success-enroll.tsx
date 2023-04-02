import Success from '../components/Enroll/Success'
import { Fragment } from 'react';
import Head from 'next/head';

function SuccessEnrollPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name='description' content='Send me your messages!' />
      </Head>
      <Success />
    </Fragment>
  );
}

export default SuccessEnrollPage;
