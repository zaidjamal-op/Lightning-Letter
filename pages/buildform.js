import React from "react";
import Head from "next/head";
import Form from "../components/Form";
import Footer from "../components/Footer";
import Header from "../components/Header";

function BuildForm() {
  return (
    <div>
      <Head>
        <title>Lightning Letter</title>
        <meta
          name="description"
          content=" Build Your Handy CoverLetter
          in less than a minute"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <div className="bg-fastletterbg h-full w-full">
        <Header />
        <Form />
      </div>
    </div>
  );
}

export default BuildForm;
