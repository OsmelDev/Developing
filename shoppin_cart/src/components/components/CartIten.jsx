
export function CartIten({image, price, title, quantity, addToCart,  id}) {
  console.log(title)
  return (
    <li key={id}>
      <img
        src={image}
        alt={title}
      />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>qty: {quantity}</small>
        <button onClick={addToCart}> + </button>
      </footer>
    </li>
  );
} 