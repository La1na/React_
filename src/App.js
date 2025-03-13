import { useState, useMemo, useCallback } from "react";
import UserList from "./components/UserList";

const usersData = [
  { id: 1, name: "Алиса" },
  { id: 2, name: "Борис" },
  { id: 3, name: "Виктор" },
  { id: 4, name: "Галина" },
];

function App() {
  const [filter, setFilter] = useState("");

  const filterUsers = useCallback(
    (text) =>
      usersData.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      ),
    []
  );

  const filteredUsers = useMemo(() => filterUsers(filter), [filter, filterUsers]);

  return (
    <div>
      <h1>Фильтр пользователей</h1>
      <input
        type="text"
        placeholder="Введите имя..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;
