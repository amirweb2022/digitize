import CartProduct from "./CartProduct/CartProduct";
const CartProductList = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        return <CartProduct data={item} key={item.id}/>;
      })}
    </>
  );
};

export default CartProductList;