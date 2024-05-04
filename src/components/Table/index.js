import "./index.css";
import React from "react";
import Godfather from "../../imgs/godfather.jpg";
import eeaoo from "../../imgs/eeaao.jpg";

import Tags from "./Tags";

const COLUMNS = [
  {
    key: "title",
    title: "Title",
    width: "1fr",
    type: "text",
  },
  {
    key: "image",
    title: "Image",
    width: "200px",
    type: "image",
  },
  {
    key: "yearReleased",
    title: "Year Released",
    width: "0.5fr",
    type: "text",
  },
  {
    key: "status",
    title: "Status",
    width: "0.5fr",
    type: "text",
  },
  {
    key: "genre",
    title: "Genre",
    width: "1fr",
    type: "component",
    component: Tags,
  },
];

const DATA = [
  {
    title: "The Godfather",
    yearReleased: 2022,
    image: Godfather,
    altText: "A poster of the movie Godfather.",
    status: "Done",
    genre: "b",
  },
  {
    title: "Everything Everywhere All At Once",
    yearReleased: 2022,
    image: eeaoo,
    altText: "A poster of the movie Everything Everywhere All At Once.",
    status: "Done",
  },
];

function Table(props) {
  // const { columns, data } = props;

  const getGridStyle = () => {
    let gridTemplateColumns = [];

    for (let i = 0; i < COLUMNS.length; i++) {
      gridTemplateColumns.push(COLUMNS[i].width ?? "minmax(0, 1fr)");
    }

    return gridTemplateColumns.join(" ");
  };
  const renderColumns = () => {
    return COLUMNS.map((column, i) => {
      return <div className="column table-cell">{column.title}</div>;
    });
  };

  const renderRowCellContent = (rowCell, column, i) => {
    switch (column.type) {
      case "text":
        return rowCell[column.key];
      case "image":
        return (
          <img
            className="row-cell-img"
            src={rowCell[column.key]}
            alt={rowCell.altText}
          />
        );
      case "component":
        return React.createElement(column.component);
      default:
        return "Invalid column type";
    }
  };

  const renderRowCell = (datum, column, i) => {
    return (
      <div className="row table-cell">
        {renderRowCellContent(datum, column, i)}
      </div>
    );
  };
  const renderRows = () => {
    return DATA.map((rowCell) => {
      return (
        <div
          className="vtable-row-container"
          style={{ gridTemplateColumns: getGridStyle() }}
        >
          {COLUMNS.map((column, i) => {
            return renderRowCell(rowCell, column, i);
          })}
        </div>
      );
    });
  };

  return (
    <div className="vtable-container">
      <div
        className="vtable-column-container"
        style={{ gridTemplateColumns: getGridStyle() }}
      >
        {renderColumns()}
      </div>
      <div className="vtable-rows-container">{renderRows()}</div>
    </div>
  );
}

export default Table;
