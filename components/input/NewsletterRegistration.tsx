import { useRef, useContext } from "react";

import classes from "./newsletterRegistration.module.css";
import NotificationContext from "@/store/NotificationContext";

function NewsletterRegistration() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const notificationCtx = useContext(NotificationContext);

  function registrationHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const emailValue = emailInputRef.current?.value;
    const reqBody = {
      email: emailValue,
    };

    notificationCtx.showNotification({
      title: "Signing up...",
      message: "Registering for newsletter.",
      status: "pending",
    });

    fetch("/api/registration", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return res.json().then((data) => {
          throw new Error(data.message || "Something went wrong");
        });
      })
      .then((data) => {
        notificationCtx.showNotification({
          title: "Success!",
          message: "Successfully registered for newsletter.",
          status: "success",
        });
      })
      .catch((err) => {
        notificationCtx.showNotification({
          title: "Error!",
          message: err.message || "something wrong",
          status: "error",
        });
      });
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
