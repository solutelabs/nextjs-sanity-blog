/* eslint-disable @next/next/no-img-element */
import { months } from './months';
import imageUrlBuilder from '@sanity/image-url';
import { getImageDimensions } from '@sanity/asset-utils';
import { PortableText } from '@portabletext/react';
import sanityClient from '../clients/sanity-client';
import ptComponents from './ptComponents';
import Posts from './Posts';
import Link from 'next/link';

const Article = (props) => {
  const { post } = props;
  const {
    title,
    related,
    mainImage,
    body,
    categories,
    author,
    _createdAt: createdAt,
    _updatedAt: updatedAt,
  } = post;
  let imgSource = null;
  let height = 0;
  if (mainImage) {
    ({ _ref: imgSource } = mainImage.asset);
    ({ height } = getImageDimensions(imgSource));
    if (height > 720) height = 720;
  }

  const dateSplit = createdAt.slice(0, 10).split('-');

  let updateSplit = '';
  if (updatedAt) {
    updateSplit = updatedAt.slice(0, 10).split('-');
  }

  function urlFor(source) {
    return imageUrlBuilder(sanityClient).image(source);
  }

  return (
    <>
      <article className="w-[95%] sm:w-[65%] mx-auto flex flex-col gap-2 justify-center items-start">
        <h1 className="m-0 capitalize">{title}</h1>
        <div className="w-full flex flex-wrap items-center justify-between">
          <Link href={`/author/${author._id}`}>
            <a className="not-italic text-white">
              <h4 className="m-0">{author.name}</h4>
            </a>
          </Link>
          <p className="date">
            {months[dateSplit[1] - 1]} {dateSplit[2]}, {dateSplit[0]}
          </p>
        </div>
        {categories?.length > 0 && categories[0].title && (
          <div className="flex flex-wrap justify-start items-center gap-2">
            <p className="m-0">Posted in: </p>
            {categories.map((category) => (
              <Link href={`/category/${category.slug}`} key={category.title}>
                <a
                  className="bg-neutral-700 bg-opacity-60 px-2 rounded-lg not-italic"
                  target="_blank"
                >
                  #{category.title}
                </a>
              </Link>
            ))}
          </div>
        )}
        {mainImage && (
          <img
            src={urlFor(imgSource).height(height)}
            alt="Main image"
            loading="lazy"
            className="self-center my-3"
          />
        )}
        <PortableText value={body} components={ptComponents} />
      </article>
      {updateSplit && (
        <>
          <hr className="mx-auto w-[95%] sm:w-[85%]" />
          <p className="text-center mt-3">
            This article was last updated on {months[updateSplit[1] - 1]}{' '}
            {updateSplit[2]}, {updateSplit[0]}.
          </p>
        </>
      )}
      {related?.length > 0 && (
        <section className="mx-auto w-[95%] sm:w-[85%] mb-16">
          <hr />
          <h2 id="posts" className="text-center mt-2">
            Related Posts
          </h2>
          <Posts posts={related} />
        </section>
      )}
    </>
  );
};
export default Article;
