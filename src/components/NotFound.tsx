import { Link } from "react-router-dom";

function NotFound() {
  return (
    <article>
      <h3>Oops, that is a wrong route :-(</h3>
      <h3>Looks like you lost your way?</h3>
      <Link className="button" to="/">
        Go Home
      </Link>
    </article>
  );
}

export default NotFound;
