import { Fragment } from 'react';
import Head from 'next/head';

import ContactForm from '../components/register/register.js';

function RegisterForm() {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name='description' content='Send me your messages!' />
      </Head>
      <ContactForm />
    </Fragment>
  );
}

export default RegisterForm;
