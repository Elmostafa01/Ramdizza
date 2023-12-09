// Test ID: IIDSAT
import { useLoaderData } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import { calcMinutesLeft,formatCurrency,formatDate } from "../../utilities/helpers";
import { TbArrowBigUpLines } from "react-icons/tb";
import { TbToolsKitchen3 } from "react-icons/tb";


function Order() {
  const order = useLoaderData();
  
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
    <div className="space-y-8 p-14 bg-stone-50 w-full max-w-2xl border rounded-xl">
      <div className="flex items-center flex-wrap justify-between gap-8">
        <h2 className="inline-flex gap-2 text-xl font-semibold font-poppins">
          <span className="text-yellow-400">Order #{id}</span>
        </h2>
        <div className="space-x-2">
          {priority && 
          <div 
            className="inline-flex">
            <span className="flex items-center gap-2 bg-yellow-100 ring-1 ring-yellow-600 rounded-full py-1 px-3 text-sm uppercase 
            font-semibold text-yellow-600 tracking-wide">
              <TbArrowBigUpLines /> Priority
            </span>
          </div>}
          <div className="inline-flex">
              <span className="flex items-center gap-2 text-sm text-emerald-600 uppercase font-semibold  
              ring-1 ring-emerald-400 bg-emerald-100 rounded-full px-4 py-[5px]">
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

      <div>
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && <p>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>
    </div>
  );
}

export async function loader({params}) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
