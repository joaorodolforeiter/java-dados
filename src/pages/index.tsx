/* eslint-disable @next/next/no-img-element */
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import dummyPosts from "~/dummydata";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>JavaDados</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-full items-center justify-center max-md:p-6">
        <div className="flex h-full w-full max-w-7xl items-center gap-6 max-md:flex-col md:justify-around">
          {dummyPosts.map((post, i) => (
            <PostCard
              id={post.id}
              key={i}
              title={post.title}
              image={post.image}
              subject={post.subject}
            />
          ))}
        </div>
      </main>
    </>
  );
};

function PostCard({
  title,
  image,
  subject,
  id,
}: {
  title: string;
  image: string;
  subject: string;
  id: string;
}) {
  return (
    <Link
      href={`post/${id}`}
      className="flex w-72 flex-col  items-center gap-3 rounded-md bg-purple-100 p-6 shadow-md max-md:w-full"
    >
      <img
        className="aspect-square w-56 rounded-md bg-white object-cover"
        src={image}
        alt=""
      />
      <div className="text-3xl">{title}</div>
      <div className="h-12 overflow-hidden text-ellipsis"> {subject} </div>
    </Link>
  );
}

export default Home;
