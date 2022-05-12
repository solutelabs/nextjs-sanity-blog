import Main from '../components/Main';

const Custom500 = () => {
  return (
    <Main>
      <div className="absolute top-0 left-0 h-screen w-screen flex items-center justify-center -z-10 text-center">
        <h1>500 - Server-side error occurred :(</h1>
      </div>
    </Main>
  );
};
export default Custom500;
