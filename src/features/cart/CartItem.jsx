import { useDispatch } from "react-redux";
import { formatCurrency } from "../../utilities/helpers";
import DeleteItems from "./DeleteItems";


function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  return (
    <li className="py-3 sm:flex items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
          <DeleteItems pizzaId={pizzaId} />
      </div>
    </li>
    
  );
}

export default CartItem;

{/* <Button 
color="bg-yellow-400 hover:bg-yellow-500 active:scale-105"
focusBg="focus:ring focus:ring-red-200"
text="text-slate-50 text-sm"
px="px-3"
py="py-1"
radius="rounded-xl"
>
<FaDeleteLeft size="1rem" color="red"/>
</Button> */}