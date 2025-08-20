import Image from "next/image";
import Link from "next/link";

const blogConfig = [
  {
    title: "ReactJS vs NextJS",
    excerpt:
      "Explore the key differences between ReactJS and NextJS....",
    image: "/thumbnails/react-v-next.png",
    url: "/demo-slug",
  },
  {
    title: "Dreams to be a Remote Developer",
    excerpt:
      "Discover the journey and challenges of becoming a successful remote developer...",
    image: "/thumbnails/dreams.png",
    url: "/demo-slug",
  },
  {
    title: "How to become a Backend Developer",
    excerpt:
      "Learn the essential steps, skills, and resources needed to start your journey as a backend developer...",
    image: "/thumbnails/become-backend-dev.png",
    url: "/demo-slug",
  },
];

export default function Blogs() {
  return (
    <section className="grid grid-cols-2 gap-4 md:grid-cols-3 p-8 ">
      {blogConfig.map((blog, index) => {
        return (
          <BlogCard
            title={blog.title}
            excerpt={blog.excerpt}
            image={blog.image}
            url={blog.url}
          />
        );
      })}
    </section>
  );
}

const BlogCard = ({ title, excerpt, image, url }) => {
  return (
    <div className="bg-gray-600/20 rounded-lg border flex flex-col p-1 gap-1 hover:scale-105 transition-all duration-300 delay-100">
      <Image className="w-full rounded-md" src={image} width={300} height={170} alt={title} />
      <h2 className="text-xl font-bold text-gray-200">{title}</h2>
      <p className=" text-sm  text-gray-400 max-w-[60%]">{excerpt}</p>
      <Link className="bg-zinc-600/30 hover:bg-zinc-700   py-2 px-3 rounded w-fit text-xs" href={`/blog${url}`}>Read More</Link>
    </div>
  );
};
