import Main from '../components/Main';

const Custom404 = () => {
  return (
    <Main>
      <div className="absolute top-0 left-0 h-screen w-screen flex items-center justify-center -z-10 text-center">
        <h1>404 - Page not found :(</h1>
      </div>
    </Main>
  );
};
export default Custom404;
