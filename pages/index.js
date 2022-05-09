import Main from '../components/Main';
import sanityClient from '../clients/sanity-client';
import { PortableText } from '@portabletext/react';

export default function Home(props) {
  const { posts } = props;
  console.log(posts);
  return (
    <>
      <Main>
        <PortableText value={posts[0]['body']} />
      </Main>
    </>
  );
}

export async function getStaticProps() {
  const posts = await sanityClient.fetch(`
  *[_type == "post"]`);
  return {
    props: {
      posts,
    },
  };
}
