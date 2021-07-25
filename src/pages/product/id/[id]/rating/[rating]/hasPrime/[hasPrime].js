import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../../../../../../components/Header";
import { useEffect, useState } from "react";
import ProductInfo from "../../../../../../../components/ProductInfo";

function ProductDetail() {
  const router = useRouter();
  const { id, rating, hasPrime } = router.query;
  const [productInfo, setProductInfo] = useState(null);

  const product = async () =>
    await fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
      res.json().then((res) => setProductInfo(res))
    );

  useEffect(() => {
    product();
  }, [id]);

  return (
    <div className="bg-gray-300 h-screen">
      <Head>
        <title>Product Details</title>
      </Head>

      <Header />

      <main className="flex max-w-screen-2xl mx-auto content-center">
        {productInfo ? (
          <ProductInfo
            key={productInfo?.id}
            id={productInfo?.id}
            title={productInfo?.title}
            rating={rating}
            price={productInfo?.price}
            description={productInfo?.description}
            category={productInfo?.category}
            image={productInfo?.image}
            hasPrime={hasPrime}
          />
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default ProductDetail;
