import { Link, redirect } from "remix";
import React, { Fragment } from "react";
import { db } from "~/utils/db.server.ts";

export const action = async ({ request }) => {
  const formInfo = await request.formData();
  const subject = formInfo.get("subject");
  const description = formInfo.get("description");

  const submitInfo = { subject, description };

  if (subject == null || description == null) {
    return redirect("/posts/emptyerrors");
  }
  const newData = await db.user.create({ data: submitInfo });
  return redirect(`/posts/${newData.userId}`);
};

function newpost() {
  return (
    <Fragment>
      <div>
        This is the NewPost
        <form method="POST">
          <div className="form-control">
            <label htmlFor="subject"></label>
            <input type="text" id="subject" name="subject" />
          </div>
          <div className="form-control">
            <label htmlFor="description"></label>
            <textarea type="text" id="description" name="description" />
          </div>
          <button type="submit" className="btn btn-primary">
            Add new Post
          </button>
        </form>
      </div>
      <Link to="/posts" className="btn btn-dark">
        Back Home
      </Link>
    </Fragment>
  );
}

export default newpost;
export const CustomeMadeError = () => {
  return redirect("/posts/emptyerrors");
};
export const ErrorBoundary = ({ error }) => {
  console.log(error.message);
  return (
    <div>
      <p>The page you try to sumbit has an error specifying {error.message}</p>
    </div>
  );
};
