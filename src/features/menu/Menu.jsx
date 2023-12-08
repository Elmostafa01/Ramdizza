import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import { IoIosArrowForward } from "react-icons/io";


function Menu() {
  const menu = useLoaderData()
  
  return (
    <div className="menu-page w-screen h-screen flex items-center justify-center">
      <div className="w-full my-auto mt-20 max-w-xl">
        <ul className="flex flex-col gap-1 py-5">
          <h1 className="menu pointer-events-none flex items-center justify-start gap-2 px-2 py-2 mt-10 text-[.7rem] text-zinc-700">
            <span className="underline font-bold font-poppins text-[.7rem]">Menu</span>
            <IoIosArrowForward /> 
            <span className="font-extrabold font-poppins text-[.6rem] uppercase">pizzas</span>
          </h1>
          {menu.map((pizza) => (
            <MenuItem pizza={pizza} key={pizza.id}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
