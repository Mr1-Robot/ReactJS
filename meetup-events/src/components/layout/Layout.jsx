import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <footer className={classes.footer}>
        <p>
          <strong>Mr.RoboT &copy; </strong>
          All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
