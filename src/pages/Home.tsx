import Hero from "../components/home/Hero";
import Feed from "../components/home/Feed";
// import OnDevelopPage from "../components/ondevelop";

const Home = () => {
  return (
    <>
      <section>
        <div className="grid justify-center">
          <Hero />
          <Feed />
          {/* <OnDevelopPage /> */}
        </div>
      </section>
    </>
  );
};

export default Home;
