import blogRecents from '../../data/blogRecents.json';
import recipeData from '../../data/recipeData.json';

export async function generateStaticParams() {
  const blogParams = blogRecents
    .filter(blog => !blog.external)
    .map((blog) => ({
      slug: blog.route.replace('/blog/', ''),
    }));
  
  const recipeParams = recipeData.map((recipe) => ({
    slug: recipe.route.replace('/blog/', ''),
  }));
  
  return [...blogParams, ...recipeParams];
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  
  const blog = blogRecents.find(
    (b) => b.route === `/blog/${slug}`
  );
  
  if (blog) {
    return {
      title: blog.full_title,
      description: blog.tag_line,
    };
  }
  
  const recipe = recipeData.find(
    (r) => r.route === `/blog/${slug}`
  );
  
  if (recipe) {
    return {
      title: recipe.name,
      description: `A recipe for ${recipe.name}`,
    };
  }
  
  // Not found
  return {
    title: 'Post Not Found',
    description: 'The requested post could not be found.',
  };
}

export default function BlogPost({ params }) {
  const { slug } = params;
  
  const blog = blogRecents.find(
    (b) => b.route === `/blog/${slug}`
  );
  
  if (blog) {
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
  
  const recipe = recipeData.find(
    (r) => r.route === `/blog/${slug}`
  );
  
  if (recipe) {
    return (
      <div className="min-h-screen bg-black text-white p-8">
        <article className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{recipe.name}</h1>
            <div className="prose prose-invert">
          </div>
        </article>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1>Post not found</h1>
    </div>
  );
}