import groq from 'groq';
import Main from '../components/Main';
import PCbg from '../components/PCbg';
import Posts from '../components/Posts';
import sanityClient from '../clients/sanity-client';

const Home = ({ posts, categories }) => {
  // console.log('Posts', posts);
  // console.log('Categories', categories);
  return (
    <>
      <PCbg />
      <Main>
        <div className="mx-auto my-auto w-[90%] h-[75vh] flex flex-col gap-4 items-center justify-center text-center">
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
        <section className="mx-auto min-h-screen w-[95%] sm:w-[85%]">
          <hr className="mt-24" />
          <h1 id="posts" className="text-center mt-2">
            Posts
          </h1>
          <Posts posts={posts} />
        </section>
      </Main>
    </>
  );
};
export default Home;

const query = groq`
*[_type == "post" || _type == "category"] {
  _id, _type, _updatedAt, _createdAt, title,
  "author": author->name,
  "slug": slug.current,
  categories[]->{title},
  description,
}
`;

export async function getStaticProps() {
  const data = await sanityClient.fetch(query);
  const posts = data.filter((x) => x._type === 'post');
  const categories = data.filter((x) => x._type === 'category');
  return {
    props: {
      posts,
      categories,
    },
  };
}
