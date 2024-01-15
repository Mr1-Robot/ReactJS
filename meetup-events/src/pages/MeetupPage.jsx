import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/ui/Card";

const MeetupPage = () => {
  const { meetupId } = useParams();
  const [meetupData, setMeetupData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://muammar-jsx-default-rtdb.firebaseio.com/meetups/${meetupId}.json`
      );

      const data = await response.json();

      setMeetupData([data]);
    }

    try {
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, [meetupId]);

  return (
    <section>
      <h1>Meetup Page</h1>

      {meetupData.map((item) => (
        <Card key={item.title}>
          <img
            src={item.image}
            alt={item.title}
            width="100%"
            style={{ height: "20rem", objectFit: "cover" }}
          />
          <div style={{ padding: "1rem 0", textAlign: "center" }}>
            <h1>{item.title}</h1>
            <address>{item.address}</address>
            <p>{item.description}</p>
          </div>
        </Card>
      ))}
    </section>
  );
};

export default MeetupPage;
