import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <p>
        Made with 🖤 by
        <strong>
          <a href="https://muammar-jsx.netlify.app">©Muammar.jsx</a>
        </strong>
      </p>
    </footer>
  );
}
