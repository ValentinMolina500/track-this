import "./index.css";

const GENRES = ["Gangster", "Romance"];
function Tags(props) {
  return GENRES.map((genre) => {
    <span>{genre}</span>
  });
}

export default Tags;
