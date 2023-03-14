import Product from "./Product/Product";
const ProductList = ({ data }) => {
  return (
    <div className="w-full md:mt-4 md:px-0 flex justify-center items-center md:justify-around lg:justify-between flex-wrap gap-x-4">
      {data.map((item, index) => {
        return <Product item={item} key={index} />;
      })}
    </div>
  );
};

export default ProductList;