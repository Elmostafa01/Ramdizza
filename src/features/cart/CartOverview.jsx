import { Link } from "react-router-dom";
import PZ from '../../images/svgs/PZ.svg'

function CartOverview() {
  return (
    <div>
      <Link to="/cart">
        <div className="cart flex flex-col justify-center items-center
         bg-slate-50 rounded-xl mx-4 w-24 text-sm overflow-hidden border-2 border-emerald-500">
          <div className="cart-up inline-flex items-center justify-center bg-emerald-600 w-24 text-center">
            <span className="cart-name font-mono font-bold text-emerald-100">Mostafa</span>
          </div>
          <div className="cart-down flex items-center justify-center gap-1 bg-slate-200 w-24 text-center">
            <span className="font-semibold font">2</span>
            <div className="relative h-4 w-4 rotate-4">
              <img className="absolute" src={PZ} />
            </div>
            <span className="pizza-price text-slate-800 font-semibold">€16,00</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CartOverview;
