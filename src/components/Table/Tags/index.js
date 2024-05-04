import "./index.css";

const GENRES = ["Gangster", "Romance"];
function Tags(props) {
  const renderGenres = () => {
    return GENRES.map((genre) => {
      return <span className="vtag">{genre}</span>;
    });
  };

  return <span className="tags-wrapper">{renderGenres()}</span>;
}

export default Tags;
