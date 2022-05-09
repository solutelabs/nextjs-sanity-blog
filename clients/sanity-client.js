import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: '4ke9thon',
  dataset: 'production',
  useCdn: true,
});
