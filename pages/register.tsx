import Register from '../components/Register/register'
import { Fragment } from 'react';
import Head from 'next/head';

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
