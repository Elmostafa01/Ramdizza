import Button from "../../UI/Button";
import { formatCurrency } from "../../utilities/helpers";
import { FaDeleteLeft } from "react-icons/fa6";


function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button 
          color="bg-red-400 hover:bg-red-600"
          text="text-slate-50 text-sm"
          px="px-3"
          py="py-1"
          radius="rounded-xl"
          >
          <FaDeleteLeft size="1rem" />

        </Button>
      </div>
    </li>
    
  );
}

export default CartItem;
