function Item({ item, onDeleteItem, onCheckedItem }) {
  return (
    <li>
      <input type="checkbox" value={item.checked} onChange={() => onCheckedItem(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button style={{ color: "red" }} onClick={() => onDeleteItem(item.id)}>
        X
      </button>
    </li>
  );
}

export default Item;
