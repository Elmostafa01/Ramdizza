import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData()

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div>
        <ul>
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
