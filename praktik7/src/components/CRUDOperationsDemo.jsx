import { useState } from "react";

const CRUDOperationsDemo = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (!input.trim()) return;
    setItems([...items, { id: Date.now(), name: input }]);
    setInput("");
  };

  const handleUpdate = (id) => {
    const newName = prompt("Edit item:");
    if (newName) {
      setItems(items.map((item) => (item.id === id ? { ...item, name: newName } : item)));
    }
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="card">
      <h2>CRUD Operations Demo</h2>
      <input
        type="text"
        placeholder="Tambah item..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Tambah</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => handleUpdate(item.id)}>Edit</button>{" "}
            <button onClick={() => handleDelete(item.id)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CRUDOperationsDemo;