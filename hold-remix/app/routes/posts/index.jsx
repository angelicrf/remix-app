import { Link, useLoaderData } from "remix";
import { Fragment } from "react";
import { db } from "~/utils/db.server.ts";

export const loader = async () => {
  const data = {
    allPosts: await db.user.findMany({
      take: 22,
      select: { userId: true, subject: true, description: true },
      orderBy: { postedTime: "asc" },
    }),
  };
  return data;
};

function NewItems() {
  const { allPosts } = useLoaderData();
  //console.log(allPosts)
  return (
    <Fragment>
      <div className="page-header">
        <h1>Posts</h1>
        <Link to="/posts/newpost" className="btn btn-dark">
          New Post
        </Link>
      </div>
      <ul className="posts-list">
        {allPosts.map((dta, index) => (
          <Fragment key={index}>
            <li key={index}>
              <Link key={index} to={dta.userId}>
                {dta.userId}
                {dta.description}
              </Link>
              <h3>{new Date().toString()}</h3>
            </li>
          </Fragment>
        ))}
      </ul>
    </Fragment>
  );
}

export default NewItems;
