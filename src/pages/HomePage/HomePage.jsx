import css from "./HomePage.module.css";
const HomePage = () => {
  return (
    <>
      <div className={css.div}>
        <h1>Welcome to the Phonebook App</h1>
        <p>This is the home page of the application.</p>
      </div>
    </>
  );
};

export default HomePage;