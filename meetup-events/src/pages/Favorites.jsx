import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

import { Link } from "react-router-dom";

const Favorites = () => {
  const favoritesContext = useContext(FavoritesContext);

  return (
    <section>
      <h1>My Favorites</h1>

      {favoritesContext.totalFavorites !== 0 && (
        <MeetupList meetups={favoritesContext.favorites} />
      )}
      {favoritesContext.totalFavorites === 0 && (
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <p>No Favorites Meetups. Start adding some?</p>
          <Link to="/">All Meetups</Link>
        </div>
      )}
    </section>
  );
};

export default Favorites;
