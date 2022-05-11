import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: '4ke9thon',
  dataset: 'production',
  apiVersion: '2022-05-09',
  useCdn: true,
});
