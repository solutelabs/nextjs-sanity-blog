import groq from 'groq';
import sanityClient from '../../clients/sanity-client';
import Main from '../../components/Main';
import Posts from '../../components/Posts';

const Category = (props) => {
  const { posts, slug } = props;
  let categoryTitle = slug.replace('-', ' ');
  return (
    <>
      <Main>
        <h2 className="mx-auto px-2 py-2 rounded-lg not-italic capitalize max-w-fit text-center">
          #{categoryTitle}
        </h2>
        {posts.length < 1 && (
          <p className="text-center mx-auto">
            There are no articles under this category.
          </p>
        )}
        {posts.length > 0 && (
          <section className="mx-auto mt-8 w-[95%] sm:w-[85%]">
            <Posts posts={posts} />
          </section>
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
