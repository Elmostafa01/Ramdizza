import { useDispatch } from "react-redux";
import Button from "../../UI/Button";
import { formatCurrency } from "../../utilities/helpers";
import { addItem } from "../cart/cartSlice";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const handleAddToCart = () => {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    }
    dispatch(addItem(newItem))
  }

  return (
    <li className="flex gap-4 bg-slate-50 p-3 px-4 shadow-light rounded-xl border">
      <img 
        src={imageUrl} 
        alt={name} 
        className={`h-24 rounded-xl ${soldOut ?'opacity-70 grayscale' :''}`}
      />
      <div className="flex flex-col grow pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm text-stone-500 italic">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? 
          <p className="shadow-inner bg-gradient-to-b from-slate-50 to-transparent text-sm text-zinc-600 inline-block px-2 py-1 rounded-full">
            {formatCurrency(unitPrice)}
          </p> : 
          <p className="text-[.7rem] uppercase px-4 py-1 bg-red-100 inline-block rounded-full font-poppins">
            Sold out
          </p>}
          {!soldOut && 
          <Button 
            onClick={handleAddToCart}
            color="bg-glovo"
            focusBg="focus:ring focus:ring-yellow-200"
            radius="rounded-full" 
            hover="hover:bg-yellow-300" 
            text="text-[.7rem]"
            weight="font-[900]"
            px="px-[1rem]"
            py="py-[.5rem]"
          >
            Add to cart
          </Button>
          }
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
