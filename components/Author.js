/* eslint-disable @next/next/no-img-element */
import { PortableText } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';
import ptComponents from './ptComponents';
import sanityClient from '../clients/sanity-client';
import { getImageDimensions } from '@sanity/asset-utils';

const Author = ({ author }) => {
  const { name, bio, image } = author;

  function urlFor(source) {
    return imageUrlBuilder(sanityClient).image(source);
  }

  let height = 0;
  if (image) {
    ({ height } = getImageDimensions(image._ref));
    if (height > 300) {
      height = 300;
    }
  }

  return (
    <>
      <section className="w-[95%] sm:w-[75%] mx-auto flex flex-col gap-2 justify-center item-center">
        <h1 className="w-full text-center">{name}</h1>
        <div className="w-full flex flex-col sm:flex-row gap-4 justify-start items-center sm:items-start text-center sm:text-left">
          {image && (
            <img
              src={urlFor(image._ref).height(height)}
              alt={name}
              loading="lazy"
              className="sm:sticky sm:top-16"
            />
          )}
          {bio && (
            <div className="sm:max-w-[75%]">
              <PortableText value={bio} components={ptComponents} />
            </div>
          )}
        </div>
      </section>
    </>
  );
};
export default Author;
