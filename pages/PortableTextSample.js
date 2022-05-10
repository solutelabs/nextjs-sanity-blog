/* eslint-disable @next/next/no-img-element */
import Main from '../components/Main';
import sanityClient from '../clients/sanity-client';
import imageUrlBuilder from '@sanity/image-url';
import { CopyBlock, dracula, monokai } from 'react-code-blocks';
import { PortableText } from '@portabletext/react';

export default function Home(props) {
  const { posts } = props;
  // console.log(posts);

  function urlFor(source) {
    return imageUrlBuilder(sanityClient).image(source);
  }

  const ptComponents = {
    types: {
      image: ({ value }) => {
        if (!value?.asset?._ref) {
          return null;
        }
        return (
          <img
            src={urlFor(value).width(1920)}
            loading="lazy"
            alt={value.alt || ' '}
            className="mb-6 self-center"
          />
        );
      },
      code: ({ value }) => {
        if (!value?.code) {
          return null;
        }
        return (
          <div className="self-start w-full max-w-full mb-4">
            <CopyBlock
              text={value.code}
              language={value.language}
              // wrapLongLines={true}
              theme={dracula}
              codeBlock={true}
            />
          </div>
        );
      },
    },
  };

  return (
    <>
      <Main>
        <div className="mx-auto max-w-[95%] sm:max-w-[75%] flex flex-col items-start justify-center">
          <PortableText value={posts[0]['body']} components={ptComponents} />
        </div>
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
