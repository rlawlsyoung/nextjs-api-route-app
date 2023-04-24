import { useRef } from "react";

import classes from "./newsletterRegistration.module.css";

function NewsletterRegistration() {
  const emailInputRef = useRef<HTMLInputElement>(null);

  function registrationHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const emailValue = emailInputRef.current?.value;
    const reqBody = {
      email: emailValue,
    };

    fetch("/api/registration", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
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
