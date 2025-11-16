import blogRecents from '../../data/blogRecents.json';

const blogData = blogRecents.find(b => b.route === '/blog/read');

export const metadata = {
  title: blogData.full_title,
  description: blogData.tag_line,
}

export default function Layout({ children }) {
  return children;
}