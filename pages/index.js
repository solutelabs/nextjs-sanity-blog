import Main from '../components/Main';
import PCbg from '../components/PCbg';

const Home = () => {
  return (
    <>
      <PCbg />
      <Main>
        <div className="mx-auto my-auto w-[90%] text-center mt-[200px] space-y-16">
          <h1>Welcome to Blogg</h1>
          <h3>Created with Next.js, Sanity and Tailwind CSS</h3>
        </div>
      </Main>
    </>
  );
};
export default Home;
