import "./index.css";

import Godfather from "../../imgs/godfather.jpg"
const COLUMNS = [
  {
    key: "title",
    title: "Title",
    width: "1fr",
    type: "text"
  },
  {
    key: "image",
    title: "Image",
    width: "minmax(0, 200px)",
    type: "image"
  },
  {
    key: "yearReleased",
    title: "Year Released",
    width: "0.5fr",
    type: "text"
  },
];

const DATA = [
  {
    title: "Everything Everywhere All at Once",
    yearReleased: 2022,
    image: Godfather,
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

  const getGridStyle = () => {
    let gridTemplateColumns = [];

    for (let i = 0; i < COLUMNS.length; i++) {
      gridTemplateColumns.push(COLUMNS[i].width ?? "minmax(0, 1fr)")
    }

    return gridTemplateColumns.join(" ");
  }
  const renderColumns = () => {
    return COLUMNS.map((column, i) => {
      return (
        <div className="column table-cell">
          {column.title}
        </div>
      );
    });
  };
  
  const renderRowCellContent = (rowCell, column, i) => {
    switch (column.type) {
      case "text": 
        return rowCell[column.key];
      case "image":
        return <img className="row-cell-img" src={rowCell[column.key]} />
    }
  }

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
        <div className="vtable-row-container" style={{gridTemplateColumns: getGridStyle()}}>
          {COLUMNS.map((column, i) => {
            return renderRowCell(rowCell, column, i);
          })}
        </div>
      );
    });
  };

  return (
    <div className="vtable-container">
      <div className="vtable-column-container"  style={{gridTemplateColumns: getGridStyle()}}>{renderColumns()}</div>
      <div className="vtable-rows-container">
        {renderRows()}
      </div>
    </div>
  );
}

export default Table;
