import Enroll from '../components/Enroll/Enroll'
import { Fragment } from 'react';
import Head from 'next/head';

function EnrollForm() {
  return (
    <Fragment>
      <Head>
        <title>Enroll for Training</title>
        <meta name='description' content='enroll for training' />
      </Head>
      <Enroll />
    </Fragment>
  );
}

export default EnrollForm;
