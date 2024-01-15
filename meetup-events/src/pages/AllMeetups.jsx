import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const Meetups = () => {
  const [meetups, setMeetups] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchAllMeetups() {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://muammar-jsx-default-rtdb.firebaseio.com/meetups.json"
        );
        const data = await response.json();

        const dataArr = [];

        for (const key in data) {
          const meetupObj = {
            id: key,
            ...data[key],
          };
          dataArr.push(meetupObj);
        }

        setMeetups(dataArr);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    }

    fetchAllMeetups();
  }, []);
  return (
    <section>
      <h1>All Meetups</h1>

      {isLoading ? <h4>Loading...</h4> : <MeetupList meetups={meetups} />}
    </section>
  );
};

export default Meetups;
