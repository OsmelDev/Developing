export default function CartIten({ name, price, quantity }) {
  return (
    <li>
      <p>{name}</p>
      <p>
        Price: <span>${price}</span>
      </p>

      <footer>
        <small>Qty : {quantity}</small>
        <button> + </button>
      </footer>
    </li>
  );
}
