import React, { useState, useRef, useEffect } from "react";
import { SketchPicker } from "react-color";
import styles from "./Grid.module.scss";

const Grid = ({ rows = 20, cols = 20 }) => {
  const [grid, setGrid] = useState(
    Array(rows)
      .fill()
      .map(() => Array(cols).fill("#ffffff"))
  );
  const [selectedColor, setSelectedColor] = useState("#ff0000");
  const [isDrawing, setIsDrawing] = useState(false);

  const handleCellClick = (row, col) => {
    const newGrid = [...grid];
    newGrid[row][col] = selectedColor;
    setGrid(newGrid);
  };

  const handleCellMouseEnter = (row, col) => {
    if (isDrawing) {
      handleCellClick(row, col);
    }
  };

  return (
    <div className={styles.gridContainer}>
      <SketchPicker color={selectedColor} onChangeComplete={color => setSelectedColor(color.hex)} />
      <div className={styles.grid} onMouseDown={() => setIsDrawing(true)} onMouseUp={() => setIsDrawing(false)} onMouseLeave={() => setIsDrawing(false)}>
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className={styles.gridRow}>
            {row.map((cell, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={styles.gridCell}
                style={{
                  backgroundColor: cell,
                  width: "20px",
                  height: "20px",
                }}
                onClick={() => handleCellClick(rowIndex, colIndex)}
                onMouseEnter={() => handleCellMouseEnter(rowIndex, colIndex)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
