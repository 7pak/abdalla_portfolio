"use client";

import { Blogs } from "@/constants/blogs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Head from "next/head";

type Blog = {
  id: number;
  title: string;
  image: string[];
  description: string;
  content: string;
};

const BlogPost = () => {
  const router = useRouter();
  const [slug, setSlug] = useState<string | undefined>(undefined);
  const [blog, setBlog] = useState<Blog | undefined>(undefined);

  useEffect(() => {
    const path = window.location.pathname.split("/");
    const slugFromUrl = path[path.length - 1];
    setSlug(slugFromUrl);
  }, []);

  useEffect(() => {
    if (slug) {
      const foundBlog: any = Blogs.find((blog) => blog.id.toString() === slug)
      setBlog(foundBlog);
    }
  }, [slug]);

  useEffect(() => {
    if (blog) {
      document.title = `${blog.title} | Abdalla`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", blog.description);
      } else {
        const description = document.createElement("meta");
        description.name = "description";
        description.content = blog.description;
        document.head.appendChild(description);
      }
    }
  }, [blog]);

  if (!blog) {
    return <p>Loading...</p>;
  }

  const canonicalUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <div className="container mx-auto p-4 flex flex-col items-center pt-20 z-20">
      <Head>
        <title>{`${blog.title} |  Abdalla`}</title>
        <meta name="description" content={blog.description} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <h1 className="lg:text-3xl md:text-2xl sm:text-2xl text-center font-bold mb-6 text-white mt-5 z-20">
        {blog.title}
      </h1>
      <div className="w-full min-h-96 mt-5 overflow-hidden rounded-[10px] z-20 flex gap-4 justify-center items-center flex-wrap">
        {blog.image.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${blog.title} image ${index + 1}`}
            className="h-96 object-cover z-20 mb-2"
          />
        ))}
      </div>

      <div
        className="blog_content lg:text-[18px] md:text-[18px] sm:text-[16px] text-white mt-10 z-20 w-full px-5 overscroll-contain break-words"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      ></div>
    </div>
  );
};

export default BlogPost;
