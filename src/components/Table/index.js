import "./index.css";

const COLUMNS = [
  {
    key: "title",
    title: "Title",
    width: "1fr"
  },
  {
    key: "image",
    title: "Image",
    width: "256px"
  },
  {
    key: "yearReleased",
    title: "Year Released",
    width: "0.5fr"
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

  const getGridStyle = () => {
    let gridTemplateColumns = [];

    for (let i = 0; i < COLUMNS.length; i++) {
      gridTemplateColumns.push(COLUMNS[i].width ?? "1fr")
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

  const renderRowCell = (datum, column, i) => {
    return (
      <div className="row table-cell">
        {datum[column.key]}
      </div>
    );
  };
  const renderRows = () => {
    return DATA.map((datum) => {
      return (
        <div className="vtable-row-container" style={{gridTemplateColumns: getGridStyle()}}>
          {COLUMNS.map((column, i) => {
            return renderRowCell(datum, column, i);
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
