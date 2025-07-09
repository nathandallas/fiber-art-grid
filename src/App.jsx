import React, { useState } from "react";
import Grid from "./components/Grid.jsx";
import Toolbar from "./components/Toolbar.jsx";
import { exportAsImage, exportAsPDF } from "./utils/exportPattern.js";

function App() {
  const [activeTool, setActiveTool] = useState("pencil");
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const handleToolSelect = tool => {
    setActiveTool(tool);
  };

  const handleExport = () => {
    exportAsImage(grid);
  };

  return (
    <div className="app">
      <header>
        <h1>Fiber Art Grid Planner</h1>
      </header>
      <Toolbar onToolSelect={handleToolSelect} onExportPDF={handleExport} />
      <Grid />
    </div>
  );
}

export default App;
