import "./addnotes.css";
const AddNotes = ({ note, handleSubmit, handleChange }) => {
  const limitNum = 200;
  return (
    <div className="add-notes">
      <form className="notes-form" onSubmit={handleSubmit}>
        <textarea
          className="notes-input"
          rows={5}
          style={{ width: "97%" }}
          placeholder="Enter your notes here..."
          value={note}
          onChange={handleChange}
        />
        <span className="limit">{limitNum - note.length} Reminnig</span>
        <input type="submit" value="Add" className="add-btn" />
      </form>
    </div>
  );
};

export default AddNotes;
