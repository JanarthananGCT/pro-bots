import { Halant, Lato } from "@next/font/google";
import "../styles/globals.css";
const inter = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});
import Head from "next/head";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ProBots</title>
        <meta name="description" content="bots" />
        <link rel="icon" href="/tablogo.png" />
      </Head>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
