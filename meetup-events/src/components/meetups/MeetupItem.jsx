import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import { Link, useNavigate } from "react-router-dom";

const MeetupItem = (props) => {
  const favoritesContext = useContext(FavoritesContext);
  const itemIsFavorite = favoritesContext.itemIsFavorite(props.id);

  const navigate = useNavigate();

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesContext.removeFavorite(props.id);
    } else {
      favoritesContext.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description: props.description,
      });
    }
  }

  async function deleteMeetupHandler(meetupId) {
    try {
      fetch(
        `https://muammar-jsx-default-rtdb.firebaseio.com/meetups/${meetupId}.json`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Deleted!");
    } catch (err) {
      console.log(err);
      return;
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>

        <div className={classes.content}>
          <h2>{props.title}</h2>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>

        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>

          <button
            className={classes.actions}
            onClick={() => deleteMeetupHandler(props.id)}
          >
            Delete
          </button>

          <Link to={`/meetups/${props.id}`}>See More</Link>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
