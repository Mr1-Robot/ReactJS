import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

import FavoritesContext from "../../store/favorites-context";
import { useContext } from "react";

const MainNavigation = () => {
  const favoritesContext = useContext(FavoritesContext);

  const badge = favoritesContext.totalFavorites !== 0;

  return (
    <header className={classes.header}>
      <h1>React Meetups</h1>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              All Meetups
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/new-meetup"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Add New Meetup
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              My Favorites
            </NavLink>
            {badge && (
              <span className={classes.badge}>
                {favoritesContext.totalFavorites}
              </span>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
