import { CopyBlock, dracula } from 'react-code-blocks';
import sanityClient from '../clients/sanity-client';
import imageUrlBuilder from '@sanity/image-url';

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
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={urlFor(value).height(464)}
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
export default ptComponents;
