import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
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

      <div className="bg-fastletterbg h-screen w-full">
        <Header />
        <Banner />
        <Footer />
      </div>
    </div>
  );
}
