import classes from "./PathTracker.module.css";

import { Link } from "react-router-dom";

export default function PathTracker({ path, prev, current }) {
  return (
    <p className={classes["path-tracker"]}>
      <span className={classes.line} />
      <Link className={classes.prev} to={path}>
        {prev}
      </Link>
      <span className={classes.slash}>/</span>
      <span className={classes.current}>{current}</span>
    </p>
  );
}
