import { CheckCircleIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Header from "../components/Header";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Cookie from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { emptyBasket, selectItems } from "../slices/basketSlice";

function Success() {
  const router = useRouter();
  const dispatch = useDispatch();

  const items = useSelector(selectItems);

  useEffect(() => {
    Cookie.set("cart", []);
    dispatch(emptyBasket([]));
  }, []);

  return (
    <div className="bg-gray-100 h-screen">
      <Head>
        <title>Order Success</title>
      </Head>

      <Header />

      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1>Thank you, your order has been confirmed</h1>
          </div>
          <p>
            We will send a confirmation once your item has shipped, if you would
            like to check the status of your order(s) please press the link
            below.
          </p>
          <button
            className="button mt-8"
            onClick={() => router.push("/orders")}
          >
            Go to my orders
          </button>
        </div>
      </main>
    </div>
  );
}

export default Success;
