import groq from 'groq';
import sanityClient from '../../clients/sanity-client';
import Head from 'next/head';
import Main from '../../components/Main';
import Author from '../../components/Author';

const AuthorPage = (props) => {
  const { author } = props;
  return (
    <>
      <Head>
        <title>{author.name} | Bloggo</title>
        <meta name="description" content={`See ${author.name} on Bloggo`} />
      </Head>
      <Main>
        <Author author={author} />
      </Main>
    </>
  );
};
export default AuthorPage;

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(`*[_type == "author"][]._id`);

  return {
    paths: paths.map((authorId) => ({ params: { authorId } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { authorId = '' } = context.params;
  const query = groq`
  *[_type == "author" && _id == $id][0]{
    _id, name, bio,
    "slug": slug.current,
    "image": image.asset,
  }
  `;
  const author = await sanityClient.fetch(query, { id: authorId });
  return {
    props: {
      author,
    },
  };
}
