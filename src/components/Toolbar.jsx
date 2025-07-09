import { FaEraser, FaSave, FaUndo, FaRedo, FaFileDownload } from "react-icons/fa";

const Toolbar = ({ onToolSelect, onSave, onUndo, onRedo, onExport }) => {
  return (
    <div className="toolbar">
      <button onClick={() => onToolSelect("pencil")}>Pencil</button>
      <button onClick={() => onToolSelect("eraser")}>
        <FaEraser /> Eraser
      </button>
      <button onClick={onUndo}>
        <FaUndo /> Undo
      </button>
      <button onClick={onRedo}>
        <FaRedo /> Redo
      </button>
      <button onClick={onSave}>
        <FaSave /> Save
      </button>
      <button onClick={onExport}>
        <FaFileDownload /> Export
      </button>
    </div>
  );
};
export default Toolbar;
