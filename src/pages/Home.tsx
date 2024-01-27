import Hero from "../components/home/Hero";
import Feed from "../components/home/Feed";

const Home = () => {
  return (
    <>
      <section>
          <div className="grid justify-center">
            <Hero />
            <Feed />
          </div>
      </section>
    </>
  );
};

export default Home;
