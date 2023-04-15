import Subtotal from "../Subtotal";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="Checkout">
      <div className="Checkout_left">
        <div className="Checkout_title">
          <h1>Your Shopping Cart</h1>
        </div>
      </div>
      <div className="Checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
