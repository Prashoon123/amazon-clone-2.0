import Cookie from "js-cookie";
import { getSession } from "next-auth/client";
import Head from "next/head";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import { selectItems } from "../slices/basketSlice";
import { server } from "../config";

export default function Home({ products }) {
  const items = useSelector(selectItems);

  useEffect(() => {
    Cookie.set("cart", items);
  }, [items]);

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <Banner />

        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products = await fetch(`${server}/api/products`).then((res) =>
    res.json()
  );

  return {
    props: {
      products,
      session,
    },
  };
}

// API endpoint - https://fakestoreapi.com/products
