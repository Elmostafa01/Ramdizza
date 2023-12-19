// Test ID: IIDSAT
import { useFetcher, useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import { calcMinutesLeft,formatCurrency,formatDate } from "../../utilities/helpers";
import OrderItem from '../order/OrderItem';
import { TbArrowBigUpLines } from "react-icons/tb";
import { TbToolsKitchen3 } from "react-icons/tb";
import { useEffect } from "react";


function Order() {
  const order = useLoaderData();

  const fetcher = useFetcher();

  useEffect(() => {
    if (!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu');
  },[fetcher]);
  
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="order-comp mt-24 space-y-8 p-14 bg-stone-50 w-full max-w-2xl border rounded-xl sm:px-16">
      <div className="flex items-center flex-wrap justify-between gap-8">
        <h2 className="inline-flex gap-2 text-[1em] font-semibold ">
          <span className="text-stone-200 bg-stone-400 ring-4 ring-zinc-500 px-2 uppercase rounded-full">
            Order: 
            <span className="text-black">#{id}</span>
          </span>
        </h2>
        <div className="space-x-2 flex">
          {priority && 
          <div 
            className="inline-flex">
            <span className="flex items-center gap-1 bg-red-200 ring-1 ring-red-600 rounded-full py-1 px-2  text-sm uppercase 
            font-semibold text-red-800 tracking-wide truncate">
              <TbArrowBigUpLines /> Priority
            </span>
          </div>}
          <div className="inline-flex">
              <span className="flex items-center gap-2 text-sm text-emerald-600 uppercase font-semibold  
              ring-1 ring-emerald-500 bg-emerald-200 rounded-full px-4 py-[5px] truncate">
              <TbToolsKitchen3 />{status} order
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-wrap justify-between gap-8 bg-stone-100 rounded-2xl p-5">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-500">(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul className="pizzas divide-y dive-stone-100 border-b border-t">
        {cart.map(item => 
        <OrderItem 
          item={item} 
          key={item.pizzaId} 
          isLoadingIngredients={fetcher.state === 'loading'}// if this doesnt exist
          ingredients={fetcher?.data?.find((element) =>//return an empty array
             element.id === item.pizzaId)?.ingredients ?? []} 
        />)}
      </ul>

      <div className="space-y-2 px-6 py-5 bg-stone-100 rounded-2xl">
        <p className="text-sm font font-medium text-zinc-600">Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p className="text-sm font font-medium text-zinc-600">Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className="font-bold">
          To pay on delivery: 
          <span className="p-2 ml-2">
            {formatCurrency(orderPrice + priorityPrice)}
          </span>
        </p>
      </div>
    </div>
  );
}

export async function loader({params}) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
