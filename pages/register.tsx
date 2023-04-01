import { Fragment } from 'react';
import Head from 'next/head';

import Register from '../components/register/register';

function RegisterForm() {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name='description' content='Send me your messages!' />
      </Head>
      <Register />
    </Fragment>
  );
}

export default RegisterForm;
