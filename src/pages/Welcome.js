import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>welcome Page</h1>
      {/* Nested Routes*/}
      <Route path="/welcome/new-user"> Welcome, new user</Route>
    </section>
  );
};
export default Welcome;
