import React from "react";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

function ProductInfo({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
  hasPrime,
}) {
  const dispatch = useDispatch();

  console.log(rating);

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

  const placeholderProductImg =
    "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMUExQTFBIiB4bWxuczp4PSJodHRwOi8vbnMuYWRvYmUuY29tL0V4dGVuc2liaWxpdHkvMS4wLyIgeG1sbnM6aT0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4bWxuczpncmFwaD0iaHR0cDovL25zLmFkb2JlLmNvbS9HcmFwaHMvMS4wLyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMCAxMDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHJlcXVpcmVkRXh0ZW5zaW9ucz0iaHR0cDovL25zLmFkb2JlLmNvbS9BZG9iZUlsbHVzdHJhdG9yLzEwLjAvIiB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIj48L2ZvcmVpZ25PYmplY3Q+PGcgaTpleHRyYW5lb3VzPSJzZWxmIj48Zz48cGF0aCBkPSJNODYuNSwyOC42aC04LjFsLTEtNy4xYy0wLjQtMi45LTEuOS01LjUtNC4yLTcuM2MtMi4zLTEuOC01LjItMi41LTguMS0yLjFMMTIsMTkuNWMtNiwwLjgtMTAuMiw2LjQtOS40LDEyLjRsNSwzNyAgICAgYzAuOCw1LjUsNS41LDkuNSwxMC45LDkuNWMwLjUsMCwxLDAsMS41LTAuMWwyLjEtMC4zYzAuNSw1LjYsNS4yLDEwLDEwLjksMTBoNTMuNmM2LDAsMTEtNC45LDExLTExVjM5LjYgICAgIEM5Ny41LDMzLjYsOTIuNiwyOC42LDg2LjUsMjguNnogTTkxLjUsMzkuNlY3MUw3NS43LDUyLjljLTIuNi0zLTcuNC0zLTEwLDBMNTIuMSw2OC41bC00LjktNS40Yy0yLjUtMi43LTYuOC0yLjctOS4yLDBMMjgsNzQgICAgIFYzOS42YzAtMi43LDIuMi01LDUtNWg1My42Qzg5LjMsMzQuNiw5MS41LDM2LjksOTEuNSwzOS42eiBNMjIsMzkuNnYzMi4ybC0yLjgsMC40Yy0yLjcsMC40LTUuMi0xLjUtNS42LTQuM0w4LjUsMzEgICAgIGMtMC40LTIuNywxLjUtNS4yLDQuMy01LjZsNTMuMS03LjNjMC4yLDAsMC41LDAsMC43LDBjMi40LDAsNC42LDEuOCw0LjksNC4zbDAuOSw2LjNIMzNDMjYuOSwyOC42LDIyLDMzLjYsMjIsMzkuNnoiPjwvcGF0aD48Y2lyY2xlIGN4PSI0Mi41IiBjeT0iNDcuOCIgcj0iNiI+PC9jaXJjbGU+PC9nPjwvZz48L3N3aXRjaD48L3N2Zz4=";

  return (
    <div className="flex flex-col mx-20 mt-8 items-center bg-white shadow-md p-5 rounded-md w-screen">
      <Image
        src={image || placeholderProductImg}
        height={200}
        width={200}
        objectFit="contain"
      />

      <div className="h-5" />

      <div className="col-span-3 mx-5">
        <p>{title}</p>

        <div className="h-2" />

        <div className="flex">
          {Array(Number(rating))
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>

        <p className="text-xs my-2 line-clamp-3">{description}</p>

        <Currency quantity={price} currency="USD" />

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              src="https://links.papareact.com/fdw"
              className="w-12"
              loading="lazy"
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>

      <div className="flex flex-col space-y-2 my-auto">
        <button className="button w-52" onClick={addItemToBasket}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductInfo;
