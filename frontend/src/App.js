import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const loadTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    setTasks(await res.json());
  };

  const addTask = async () => {
    await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    });
    setText("");
    loadTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
    loadTasks();
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div style={{ padding: 30 }}>
      <h1>To Do List</h1>

      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Écris une tâche..."
      />

      <button onClick={addTask}>Ajouter</button>

      <ul>
        {tasks.map(t => (
          <li key={t.id}>
            {t.text}
            <button onClick={() => deleteTask(t.id)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

