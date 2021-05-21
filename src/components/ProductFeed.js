import Product from "./Product";
import FlipMove from "react-flip-move";
import { useEffect, useState } from "react";

function ProductFeed({ products }) {
  const [dummyProducts, setDummyProducts] = useState([]);
  const [showImage, setShowImage] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setDummyProducts(products);
      setShowImage(true);
    }, 500);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowImage(true);
    }, 600);
  }, []);

  return (
    <FlipMove
      leaveAnimation="none"
      className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto"
    >
      {dummyProducts
        .slice(0, 4)
        .map(({ id, title, price, description, category, image }) => (
          <Product
            category={category}
            image={image}
            title={title}
            description={description}
            key={id}
            id={id}
            price={price}
          />
        ))}

      {showImage && (
        <img
          src="https://links.papareact.com/dyz"
          className="md:col-span-full"
          alt=""
        />
      )}

      <div className="md:col-span-2">
        {dummyProducts
          .slice(4, 5)
          .map(({ id, title, price, description, category, image }) => (
            <Product
              category={category}
              image={image}
              title={title}
              description={description}
              key={id}
              id={id}
              price={price}
            />
          ))}
      </div>

      {dummyProducts
        .slice(5, products.length)
        .map(({ id, title, price, description, category, image }) => (
          <Product
            category={category}
            image={image}
            title={title}
            description={description}
            key={id}
            id={id}
            price={price}
          />
        ))}
    </FlipMove>
  );
}

export default ProductFeed;
