import Link from 'next/link';

const Categories = (props) => {
  const { categories } = props;
  return (
    <>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {categories.map((category) => (
          <Link href={`/category/${category.slug}`} key={category.title}>
            <a
              className="bg-neutral-700 bg-opacity-60 hover:bg-opacity-75 px-2 py-2 rounded-lg not-italic text-4xl"
              target="_blank"
            >
              #{category.title}
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};
export default Categories;
