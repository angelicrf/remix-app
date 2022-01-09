import { Link } from "remix";
import { Fragment } from "react";

const emptyerrors = () => {
  return (
    <Fragment>
      <div>
        <p>Empty fields is not accepted</p>
      </div>
      <Link className="btn btn-dark" to="/posts/newpost">
        Back New Post
      </Link>
    </Fragment>
  );
};
export default emptyerrors;
