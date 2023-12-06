import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData()
//"w-full h-[100vh] grid grid-cols-2 place-items-center mx-auto overflow-scroll overflow-x-hidden
  return (
    <div className="menu-page w-screen h-screen flex items-center justify-center">
      <div className="menu-pizza">
        <ul className="flex flex-col gap-1 ">
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
