import { useDispatch } from "react-redux"
import Button from "../../UI/Button"
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({pizzaId, currentQuantity}) {
    const dispatch = useDispatch();

  return (
    <div className="flex gap-2 items-center md:gap-3">
        <Button 
            onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
            color="bg-glovo"
            focusBg="focus:ring focus:ring-yellow-200"
            radius="rounded-full" 
            hover="hover:bg-yellow-300" 
            text="md:px-3.5 md:py-2 text-sm"
            weight="font-[900]"
            px="px-[.9rem]"
            py="py-[.5rem]"
            >
        -
        </Button>
        <span className="text-sm font-bold">{currentQuantity}</span>
        <Button
            onClick={() => dispatch(increaseItemQuantity(pizzaId))}            
            color="bg-glovo"
            focusBg="focus:ring focus:ring-yellow-200"
            radius="rounded-full" 
            hover="hover:bg-yellow-300" 
            text="md:px-3.5 md:py-2 text-sm"
            weight="font-[900]"
            px="px-[.8rem]"
            py="py-[.5rem]"
        >
        +
        </Button>
    </div>
  )
}

export default UpdateItemQuantity
