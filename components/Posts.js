import Link from 'next/link';
import { months } from './months';

const Posts = ({ posts }) => {
  return (
    <div id="articles-lineup" className="w-full mx-auto flex flex-col gap-8">
      {posts.map((post) => {
        let dateSplit;
        if (post._updatedAt) {
          dateSplit = post._updatedAt.slice(0, 10).split('-');
        } else {
          dateSplit = post._createdAt.slice(0, 10).split('-');
        }
        return (
          <Link key={post._id} href={`/article/${post.slug}`}>
            <a
              className="border-2 hover:bg-neutral-700 hover:bg-opacity-50 transition-all duration-200 w-full
               flex flex-col sm:flex-row sm:items-center justify-between px-2 rounded-lg"
              target="_blank"
            >
              <div className="flex flex-col sm:max-w-[33%]">
                <h2>{post.title}</h2>
                <p className="-mt-4 sm:mb-1 sm:mt-0">{post.author}</p>
              </div>
              {post.categories?.length > 0 && (
                <div className="sm:max-w-[33%] flex gap-4 not-italic flex-wrap">
                  {post.categories.map((category) => (
                    <div
                      key={category.title}
                      className="bg-neutral-700 bg-opacity-60 px-2 rounded-lg"
                    >
                      #{category.title}
                    </div>
                  ))}
                </div>
              )}
              <pre className="not-italic mt-4 sm:m-0 sm:max-w-[33%] font-sans">
                Last updated on{' '}
                <p className="italic m-0">
                  {dateSplit[2]} {months[dateSplit[1] - 1]} {dateSplit[0]}
                </p>
              </pre>
            </a>
          </Link>
        );
      })}
    </div>
  );
};
export default Posts;
