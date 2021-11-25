import { useEffect, useState } from "react";
import AddNotes from "./components/AddNotes";
import Notes from "./components/Notes";
import { nanoid } from "nanoid";

function App() {
  const [allNotes, setNotes] = useState([]);
  const [note, setNote] = useState("");

  const handleChange = (e) => {
    if (200 - e.target.value.length >= 0) {
      setNote(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.length > 0) {
      setNotes([...allNotes, { id: nanoid(), text: note }]);
      setNote("");
    }
  };

  const removeItem = (id) => {
    const newItem = allNotes.filter((note) => note.id !== id);
    setNotes(newItem);
  };

  useEffect(() => {
    const storeNotes = JSON.parse(localStorage.getItem("notes"));
    if (storeNotes) {
      setNotes(storeNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(allNotes));
  }, [allNotes]);

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Notes</h1>
        <AddNotes
          note={note}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
        <Notes notes={allNotes} removeItem={removeItem} />
      </div>
    </div>
  );
}

export default App;
