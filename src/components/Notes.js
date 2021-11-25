import "./notes.css";
import Note from "./Note";

const Notes = ({ notes, removeItem }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => {
        return <Note key={note.id} note={note} removeItem={removeItem} />;
      })}
    </div>
  );
};

export default Notes;
