import "./index.css";

import { useEffect, useRef, useState } from "react";
const COLUMNS = [
  {
    key: "title",
    title: "Title",
  },
  {
    key: "yearReleased",
    title: "Year Released",
  },
];

const DATA = [
  {
    title: "Everything Everywhere All at Once",
    yearReleased: 2022,
  },
  {
    title: "Everything Everywhere All at Once",
    yearReleased: 2022,
  },
  {
    title: "Everything Everywhere All at Once",
    yearReleased: 2022,
  },
  {
    title: "Everything Everywhere All at Once",
    yearReleased: 2022,
  },
  {
    title: "Everything Everywhere All at Once",
    yearReleased: 2022,
  },
  {
    title: "The Super Mario Bros. Movie",
    yearReleased: 2023,
  },
];

function Table(props) {
  // const { columns, data } = props;
  const rowsRef = useRef(null);
  const [columnWidths, setColumnWidths] = useState([]);

  useEffect(() => {
    if (!rowsRef.current) return;

    // const tableContainer = rowsRef.current;
    const rowContainers = rowsRef.current;

    console.log(DATA);
    // console.log(tableContainer);

    const tempColumnWidths = [];


    
    // Each row
    for (const rowContainer of rowContainers.children) {

      // maybe subgrid can acheive this?
      let maxWidth = -1; // Check against the width of the column
      for (const rowCell of rowContainer.children ) {
        if (rowCell.offsetWidth > maxWidth) maxWidth = rowCell.offsetWidth;
      }

      tempColumnWidths.push(maxWidth);
    }

    setColumnWidths(tempColumnWidths);
  }, DATA);
  const renderColumns = () => {
    return COLUMNS.map((column, i) => {
      return (
        <div className="column table-cell" style={{ width: columnWidths[i] }}>
          {column.title}
        </div>
      );
    });
  };

  const renderRowCell = (datum, column, i) => {
    return (
      <div className="row table-cell" style={{ width: columnWidths[i] }}>
        {datum[column.key]}
      </div>
    );
  };
  const renderRows = () => {
    return DATA.map((datum) => {
      return (
        <div className="vtable-row-container">
          {COLUMNS.map((column, i) => {
            return renderRowCell(datum, column, i);
          })}
        </div>
      );
    });
  };

  return (
    <div className="vtable-container">
      <div className="vtable-column-container">{renderColumns()}</div>
      <div className="vtable-rows-container" ref={rowsRef}>
        {renderRows()}
      </div>
    </div>
  );
}

export default Table;
