import { useDispatch } from "react-redux";
import Button from "../../UI/Button"
import { deleteItem } from "./cartSlice";

function DeleteItems({pizzaId}) {
    const dispatch = useDispatch();

  return (
    <Button 
    onClick={() => dispatch(deleteItem(pizzaId))}
    color="bg-glovo"
    focusBg="focus:ring focus:ring-yellow-200"
    radius="rounded-full" 
    hover="hover:bg-yellow-300" 
    text="text-[.7rem]"
    weight="font-[900]"
    px="px-[1rem]"
    py="py-[.5rem]"
    >
        Delete
    </Button>
  )
}

export default DeleteItems
