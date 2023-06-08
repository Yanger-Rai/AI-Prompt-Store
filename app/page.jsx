import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        AI Prompt Store is an open-source AI prompting space for modern
        workforce to discover, create and share creative prompts for ChatGPT,
        midjourney etc.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
