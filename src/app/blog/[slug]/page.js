import blogRecents from '../../data/blogRecents.json';

export async function generateStaticParams() {
  return blogRecents
    .filter(blog => !blog.external)
    .map((blog) => ({
      slug: blog.route.replace('/blog/', ''),
    }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  
  const blog = blogRecents.find(
    (b) => b.route === `/blog/${slug}`
  );
  
  if (!blog) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.',
    };
  }
  
  return {
    title: blog.full_title,
    description: blog.tag_line,
  };
}

export default function BlogPost({ params }) {
  const { slug } = params;
  
  const blog = blogRecents.find(
    (b) => b.route === `/blog/${slug}`
  );
  
  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1>Blog post not found</h1>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <article className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{blog.full_title}</h1>
        <p className="text-gray-400 mb-8">{blog.tag_line}</p>
        <p className="text-sm text-gray-500 mb-8">{blog.date}</p>
        <div className="prose prose-invert">
        </div>
      </article>
    </div>
  );
}