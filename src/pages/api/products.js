import products from "../../data/products.json";

export default async (req, res) => {
  res.send(products);
};
