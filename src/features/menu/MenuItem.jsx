import { formatCurrency } from "../../utilities/helpers";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 bg-slate-50 p-2 shadow-light rounded-xl border">
      <img src={imageUrl} alt={name} 
      className={`h-24 rounded-xl ${soldOut ?
      'opacity-70 grayscale' :
      ''}`}/>
      <div className="flex flex-col">
        <p>{name}</p>
        <p>{ingredients.join(', ')}</p>
        <div className="mt-auto">
          {!soldOut ? 
          <p className="text-sm">{formatCurrency(unitPrice)}</p> : 
          <p className="text-[.7rem] uppercase px-4 py-1 bg-red-100 inline-block rounded-full font-poppins">Sold out</p>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
