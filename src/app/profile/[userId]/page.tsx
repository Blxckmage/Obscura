import Card from "@/components/Card";
import { getUserById } from "@/lib/api";
import { ProfileUser } from "@/models/User";
import Image from "next/image";
import { redirect } from "next/navigation";

const images = [
  {
    title: "Secret Life",
    author: "John Doe",
    img: "/assets/home-1.png",
  },
  {
    title: "Quintessence",
    author: "Alex Turner",
    img: "/assets/home-2.png",
  },
  {
    title: "Peach Pit",
    author: "Chris",
    img: "/assets/home-3.png",
  },
  {
    title: "The Last Shadow Puppets",
    author: "Miles Kane",
    img: "/assets/home-4.png",
  },
  {
    title: "Secret Life",
    author: "John Doe",
    img: "/assets/home-1.png",
  },
  {
    title: "The Last Shadow Puppets",
    author: "Miles Kane",
    img: "/assets/home-4.png",
  },

  {
    title: "Secret Life",
    author: "John Doe",
    img: "/assets/home-1.png",
  },
  {
    title: "Quintessence",
    author: "Alex Turner",
    img: "/assets/home-2.png",
  },
  {
    title: "Peach Pit",
    author: "Chris",
    img: "/assets/home-3.png",
  },
  {
    title: "The Last Shadow Puppets",
    author: "Miles Kane",
    img: "/assets/home-4.png",
  },
  {
    title: "Secret Life",
    author: "John Doe",
    img: "/assets/home-1.png",
  },
  {
    title: "The Last Shadow Puppets",
    author: "Miles Kane",
    img: "/assets/home-4.png",
  },
];

const UserPage = async ({ params }: { params: { userId: string } }) => {
  const user: ProfileUser = await getUserById(params.userId);
  if (!user) {
    redirect("/");
  }

  return (
    <>
      <section className="container flex min-h-[40vh] bg-zinc-50">
        <div className="flex w-full flex-col items-center justify-center space-y-3 bg-opacity-40">
          <Image
            src={user?.image!}
            alt={user?.name!}
            width={100}
            height={100}
            className="rounded-full"
          />
          <h1 className="text-lg font-bold text-zinc-950">{user?.name}</h1>
          <div className="flex flex-col items-center justify-center space-y-2 text-xs text-zinc-600">
            <h1 className="font-bold uppercase">About</h1>
            <p>bunch of pics</p>
          </div>
        </div>
      </section>
      <section className="min-h-[60vh] bg-zinc-50">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold">Gallery</h1>
          <div className="columns-2 gap-4 px-16 py-8 md:columns-3 lg:columns-4 xl:columns-5">
            {images.map((item) => (
              <div className="mb-8 overflow-hidden rounded-lg" key={item.img}>
                <Card src={item.img} title={item.title} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default UserPage;
