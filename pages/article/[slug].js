import groq from 'groq';
import sanityClient from '../../clients/sanity-client';
import Article from '../../components/Article';
import Main from '../../components/Main';
import Head from 'next/head';

const ArticlePage = (props) => {
  return (
    <>
      <Head>
        <title>{props.post.title} | Bloggo</title>
        <meta
          name="description"
          content={`Read article ${props.post.title} on Bloggo`}
        />
      </Head>
      <Main>
        <Article post={props.post} />
      </Main>
    </>
  );
};
export default ArticlePage;

export async function getStaticProps(context) {
  const { slug = '' } = context.params;
  const query = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id, _createdAt, _updatedAt,
    author->{name, _id, "slug": slug['current']},
    body, categories[]->{title, "slug": slug.current},
    mainImage, "slug": slug['current'], title,
    related[]->{
        _id, _updatedAt, _createdAt, title,
        "author": author->name,
        "slug": slug.current,
        categories[]->{title, "slug": slug.current},
    }
  }`;
  const post = await sanityClient.fetch(query, { slug });
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`,
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}
