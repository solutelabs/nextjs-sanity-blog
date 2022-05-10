import Header from './Header';

const Main = (props) => {
  return (
    <>
      <Header />
      <main className="mt-6">{props.children}</main>
    </>
  );
};
export default Main;
