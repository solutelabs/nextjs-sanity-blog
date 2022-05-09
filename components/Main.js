import Header from './Header';

const Main = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
};
export default Main;
