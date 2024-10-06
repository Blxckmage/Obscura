import useSession from "@/hooks/use-session";
import React from "react";

const Homepage = async () => {
  const session = await useSession();
  return (
    <section>
      {session ? (
        <div>
          <h1>Welcome, {session.name}</h1>
          <p>Here is your secret content</p>
        </div>
      ) : (
        <div>
          <p>You are not supposed to be here</p>
        </div>
      )}
    </section>
  );
};

export default Homepage;
