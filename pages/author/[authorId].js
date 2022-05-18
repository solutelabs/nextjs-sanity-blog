import groq from 'groq';
import sanityClient from '../../clients/sanity-client';
import Head from 'next/head';
import Main from '../../components/Main';
import Author from '../../components/Author';
import PCbg from '../../components/PCbg';

const AuthorPage = (props) => {
  const { author, posts } = props;
  return (
    <>
      <Head>
        <title>{author.name} | Bloggo</title>
        <meta name="description" content={`See ${author.name} on Bloggo`} />
      </Head>
      <PCbg />
      <Main>
        <Author author={author} posts={posts} />
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
  const queryAuthor = groq`
  *[_type == "author" && _id == $id][0]{
    _id, name, bio,
    "slug": slug.current,
    "image": image.asset,
  }
  `;
  const queryAuthorPosts = groq`
  *[_type == "post" && $id == author._ref]{
    _id, _type, _updatedAt, _createdAt, title,
    "author": author->name,
    "slug": slug.current,
    categories[]->{title, "slug": slug.current},
  }
  `;
  const author = await sanityClient.fetch(queryAuthor, { id: authorId });
  const posts = await sanityClient.fetch(queryAuthorPosts, { id: authorId });
  return {
    props: {
      author,
      posts,
    },
  };
}
