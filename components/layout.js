import Header from "./Header";
import Head from "next/head";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
}
