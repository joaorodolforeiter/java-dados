/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import dummyPosts from "~/dummydata";

export default function ArticlePage() {
  const router = useRouter();
  const { id } = router.query;
  const post = dummyPosts.find((post) => post.id == id);
  console.log(post);
  return (
    <div className="flex w-full flex-col items-center">
      <div className="relative w-full max-w-7xl">
        <img
          className="aspect-video w-full object-cover"
          src={post?.image}
          alt=""
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-purple-800 p-6 text-3xl text-purple-100">
          {post?.title}
        </div>
      </div>
      {post?.subject}
    </div>
  );
}
