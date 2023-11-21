import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div>
      <Link to="/cart">
        <p>
          <div>
            <span className="pizza-number">1</span>
            <span className="pizza-cart">PIZZAS</span>
          </div>
          <span className="pizza-price">€16,00</span>
        </p>
      </Link>
    </div>
  );
}

export default CartOverview;
