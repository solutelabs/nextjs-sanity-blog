import groq from 'groq';
import sanityClient from '../../clients/sanity-client';
import Main from '../../components/Main';
import Posts from '../../components/Posts';
import Head from 'next/head';

const Category = (props) => {
  const { posts, slug } = props;
  const toTitleCase = (phrase, delimeter = ' ') => {
    return phrase
      .toLowerCase()
      .split(delimeter)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  const categoryTitle = toTitleCase(slug, '-');
  return (
    <>
      <Head>
        <title>{categoryTitle} | Bloggo</title>
      </Head>
      <Main>
        <h2 className="mx-auto px-2 py-2 rounded-lg not-italic max-w-fit text-center">
          #{categoryTitle}
        </h2>
        {posts.length < 1 && (
          <>
            <Head>
              <meta
                name="description"
                content={`No articles available under category ${categoryTitle} on Bloggo`}
              />
            </Head>
            <p className="text-center mx-auto">
              There are no articles under this category.
            </p>
          </>
        )}
        {posts.length > 0 && (
          <>
            <Head>
              <meta
                name="description"
                content={`Read articles on ${categoryTitle} on Bloggo`}
              />
            </Head>
            <section className="mx-auto mt-8 w-[95%] sm:w-[85%]">
              <Posts posts={posts} />
            </section>
          </>
        )}
      </Main>
    </>
  );
};
export default Category;

const query = groq`
*[_type == "post" && $slug in categories[]->slug.current]{
  _id, _type, _updatedAt, _createdAt, title,
  "author": author->name,
  "slug": slug.current,
  categories[]->{title, "slug": slug.current},
}
`;

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "category"][].slug.current`,
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const posts = await sanityClient.fetch(query, { slug });
  return {
    props: {
      posts,
      slug,
    },
  };
}
