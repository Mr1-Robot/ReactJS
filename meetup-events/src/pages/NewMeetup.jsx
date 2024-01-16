import { useState } from "react";
import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  async function addMeetupHandler(meetupData) {
    setIsSubmitting(true);

    try {
      await fetch(
        "https://muammar-jsx-default-rtdb.firebaseio.com/meetups.json",
        {
          method: "POST",
          body: JSON.stringify(meetupData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch {
      setError(true);
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);
    setError(false);
    navigate("/");
  }

  return (
    <section>
      <h1>Add New Meetups</h1>

      <NewMeetupForm
        onAddMeetup={addMeetupHandler}
        isSubmitting={isSubmitting}
        error={error}
      />
    </section>
  );
};

export default NewMeetup;
