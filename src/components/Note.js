import "./notes.css";
import { MdDeleteForever } from "react-icons/md";
const Note = ({ note, removeItem }) => {
  const { id, text } = note;
  return (
    <div className="note">
      <p>{text}</p>
      <div className="icon">
        <MdDeleteForever onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default Note;
