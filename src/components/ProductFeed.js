import Product from "./Product";
import Fuse from "fuse.js";
import { useSelector } from "react-redux";
import { searchString } from "../slices/searchSlice";

function ProductFeed({ products }) {
  const string = useSelector(searchString);

  const fuse = new Fuse(products, {
    keys: ["title"],
    includeScore: true,
  });

  const results = fuse.search(!string ? " " : string);

  if (!string || !results) {
    return (
      <div
        leaveAnimation="none"
        className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto"
      >
        {products
          .slice(0, 4)
          .map(
            (
              {
                id,
                title,
                price,
                description,
                category,
                image,
                rating,
                hasPrime,
              },
              i
            ) => (
              <Product
                category={category}
                image={image}
                title={title}
                description={description}
                key={id}
                id={id}
                price={price}
                i={i}
                rating={rating}
                hasPrime={hasPrime}
              />
            )
          )}

        <img
          src="https://links.papareact.com/dyz"
          className="md:col-span-full"
          alt=""
        />

        <div className="md:col-span-2">
          {products
            .slice(4, 5)
            .map(
              (
                {
                  id,
                  title,
                  price,
                  description,
                  category,
                  image,
                  rating,
                  hasPrime,
                },
                i
              ) => (
                <Product
                  category={category}
                  image={image}
                  title={title}
                  description={description}
                  key={id}
                  id={id}
                  price={price}
                  i={i + 4}
                  rating={rating}
                  hasPrime={hasPrime}
                />
              )
            )}
        </div>

        {products
          .slice(5, products.length)
          .map(
            (
              {
                id,
                title,
                price,
                description,
                category,
                image,
                rating,
                hasPrime,
              },
              i
            ) => (
              <Product
                category={category}
                image={image}
                title={title}
                description={description}
                key={id}
                id={id}
                price={price}
                i={i + 5}
                rating={rating}
                hasPrime={hasPrime}
              />
            )
          )}
      </div>
    );
  } else {
    return (
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
        {results.slice(0, 4).map(({ item, score }, i) => (
          <>
            <Product
              category={item.category}
              image={item.image}
              title={item.title}
              description={item.description}
              key={item.id}
              id={item.id}
              price={item.price}
              i={i + 5}
              rating={item.rating}
              hasPrime={item.hasPrime}
            />
          </>
        ))}

        <img
          src="https://links.papareact.com/dyz"
          className="md:col-span-full"
          alt=""
        />

        <div className="md:col-span-2">
          {results.length > 4 && (
            <>
              {results.slice(4, 5).map(({ item, score }, i) => (
                <>
                  <Product
                    category={item.category}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    key={item.id}
                    id={item.id}
                    price={item.price}
                    i={i + 5}
                    rating={item.rating}
                    hasPrime={item.hasPrime}
                  />
                </>
              ))}
            </>
          )}
        </div>

        {results.length > 5 && (
          <>
            {results.slice(5, products.length).map(({ item, score }, i) => (
              <>
                <Product
                  category={item.category}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  key={item.id}
                  id={item.id}
                  price={item.price}
                  i={i + 5}
                  rating={item.rating}
                  hasPrime={item.hasPrime}
                />
              </>
            ))}
          </>
        )}
      </div>
    );
  }
}

export default ProductFeed;
