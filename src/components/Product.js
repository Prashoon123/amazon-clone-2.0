import { forwardRef, useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import { useRouter } from "next/router";

const MAX_RATING = 5;
const MIN_RATING = 1;

const Product = forwardRef(
  ({ id, title, price, description, category, image, i }, ref) => {
    const [rating] = useState(
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    const [hasPrime] = useState(Math.random() < 0.5);
    const dispatch = useDispatch();
    const router = useRouter();

    const addItemToBasket = () => {
      const product = {
        id,
        title,
        price,
        description,
        category,
        image,
        hasPrime,
        rating,
      };

      dispatch(addToBasket(product));
    };

    return (
      <div ref={ref} className="relative flex flex-col m-5 bg-white z-30 p-10">
        <div
          className="cursor-pointer"
          onClick={() => router.push(`/product/${id}`)}
        >
          <p className="absolute top-2 right-2 text-xs italic text-gray-400">
            {category}
          </p>

          <Image src={image} width={200} height={200} objectFit="contain" />

          <h4 className="my-3">{title}</h4>

          <div className="flex">
            {Array(rating || Math.floor(Math.random() * 4))
              .fill()
              .map((_, i) => (
                <StarIcon key={i} className="h-5 text-yellow-500" />
              ))}
          </div>

          <p className="text-xs my-2 line-clamp-2">{description}</p>

          <div className="mb-5">
            <Currency quantity={price} currency="USD" />
          </div>

          {hasPrime && (
            <div className="flex items-center space-x-2 -mt-5">
              <img
                className="w-12"
                src="https://links.papareact.com/fdw"
                alt=""
              />
              <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
            </div>
          )}
        </div>

        <button onClick={addItemToBasket} className="mt-auto button">
          Add to Cart
        </button>
      </div>
    );
  }
);

export default Product;
