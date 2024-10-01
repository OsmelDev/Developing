export default function CartIten({ name, price, quantity }) {
  return (
    <li
      className="flex flex-col text-white text-sm  border border-y-violet-400 
    border-x-transparent rounded-3xl p-3 gap-5"
    >
      <p className="font-bold">{name}</p>
      <p>
        Price: <span className="font-bold">${price}</span>
      </p>

      <footer className="flex flex-row justify-center gap-4">
        <small className="flex gap-1">
          Qty : <p className="font-bold">{quantity}</p>
        </small>
        <button className=" h-5 w-5 flex items-center justify-center rounded-lg bg-black active:bg-gray-600">
          {" "}
          +{" "}
        </button>
      </footer>
    </li>
  );
}
