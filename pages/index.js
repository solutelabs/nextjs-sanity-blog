import Main from '../components/Main';
import PCbg from '../components/PCbg';

const Home = () => {
  return (
    <>
      <PCbg />
      <Main>
        <div className="mx-auto my-auto w-[90%] text-center mt-[200px] space-y-16">
          <h1>Welcome to Bloggo</h1>
          <h3>
            Created with{' '}
            <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
              Next.js
            </a>
            ,{' '}
            <a href="https://sanity.io/" target="_blank" rel="noreferrer">
              Sanity
            </a>{' '}
            and{' '}
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              Tailwind CSS
            </a>
          </h3>
        </div>
      </Main>
    </>
  );
};
export default Home;
