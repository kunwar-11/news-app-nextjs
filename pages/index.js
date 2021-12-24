import axios from "axios";
import Head from "next/head";
import { News, Sidebar } from "../components";

export const getServerSideProps = async () => {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.API_KEY}`
  );
  return {
    props: {
      news: response.data,
    },
  };
};

export default function Home({ news }) {
  return (
    <div>
      <Head>
        <title>News IT</title>
        <meta name="description" content="read latest news from all domains" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <News news={news} />
    </div>
  );
}
