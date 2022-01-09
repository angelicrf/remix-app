import { Outlet } from "remix";
import React from "react";

function posts() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default posts;
