import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import ProductInfo from "../../components/ProductInfo";

function ProductDetail({ products }) {
  const router = useRouter();
  const [productInfo, setProductInfo] = useState([]);

  const { id } = router.query;

  useEffect(() => {
    setProductInfo([]);

    if (id >= 0) {
      setProductInfo(products.splice(id, 1));
    } else {
      console.warn("Not able to show the product");
    }
  }, [id]);

  return (
    <div className="bg-gray-300">
      <Head>
        <title>Product Details</title>
      </Head>

      <main className="flex max-w-screen-2xl mx-auto h-screen content-center">
        <ProductInfo
          key={productInfo[0]?.id}
          id={productInfo[0]?.id}
          title={productInfo[0]?.title}
          rating={productInfo[0]?.rating}
          price={productInfo[0]?.price}
          description={productInfo[0]?.description}
          category={productInfo[0]?.category}
          image={productInfo[0]?.image}
          hasPrime={productInfo[0]?.hasPrime}
        />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}

export default ProductDetail;
