import ReactRouter from "../assets/react-router.svg";
import Hook from "../assets/hook.svg";
import Dynamic from "../assets/dynamic.svg";
import Modules from "../assets/Modules.svg";
import Axios from "../assets/axios.svg";
import ReduxToolkit from "../assets/ReduxToolkit.svg";

export const NAV_LINKS = [
  { id: 0, title: "Home", href: "/" },
  { id: 1, title: "Products", href: "/products" },
  { id: 2, title: "About Me", href: "/about-me" },
];

export const TECH_CARDS = [
  {
    id: 0,
    image: ReactRouter,
    title: "React Router",
    description:
      "Implemented the latest version of React Router, leveraging its new features such as loaders and actions to enhance navigation functionality.",
    color: "#ffd29b",
  },
  {
    id: 1,
    image: Hook,
    title: "Custom Hooks",
    description:
      "Designed custom hooks to enhance code organization, promoting the principles of code reusability and the DRY (Don't Repeat Yourself) concept.",
    color: "#a0e7ea",
  },
  {
    id: 2,
    image: Dynamic,
    title: "Dynamic Routes",
    description:
      "Implemented dynamic segment routing for each product, showcasing effective handling of dynamic routes within a React application.",
    color: "#d1d1d1",
  },
  {
    id: 3,
    image: Modules,
    title: "CSS Modules",
    description:
      "Employed CSS Modules to separate component styles, preventing naming conflicts and enhancing code maintainability through encapsulated styling.",
    color: "#BFBFBF",
  },
  {
    id: 4,
    image: Axios,
    title: "Axios",
    description:
      "Integrated Axios for data fetching, opting for its streamlined approach over the standard fetch function and simplified status handling.",
    color: "#4E8082",
  },
  {
    id: 5,
    image: ReduxToolkit,
    title: "Redux Toolkit",
    description:
      "Implemented Redux Toolkit to effectively manage the state of the application and its components, ensuring a scalable and organized state management approach.",
    color: "#A6CBCC",
  },
];
