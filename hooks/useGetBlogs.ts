import { useEffect, useState } from "react";
import { Entry } from "contentful";
import { client } from "../util/contentful";

const useGetBlogs = (limit: number) => {
  const [blogs, setBlogs] = useState<Entry<any>[] | null>(null);
  const [isCancelled, setIsCancelled] = useState(false);

  useEffect(() => {
    const getBlogs = async () => {
      const res = await client.getEntries({
        content_type: "badTeacherBlog",
        limit: limit,
        order: "sys.createdAt",
      });
      if (!isCancelled) setBlogs(res.items);
    };
    getBlogs();

    return () => setIsCancelled(true);
  }, []);

  return { blogs };
};

export default useGetBlogs;
