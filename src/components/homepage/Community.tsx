import { ChevronRight } from "lucide-react";
import Card from "../Card";

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
];

export default function Community() {
  return (
    <>
      <div className="mx-auto flex min-h-screen flex-col">
        <div className="px-8 py-6">
          <h1 className="flex items-center text-5xl font-bold">
            <ChevronRight size={43} strokeWidth={4} />
            <span>By Community</span>
          </h1>
        </div>
        <div className="column-1 md:column-3 gap-4 px-16 py-8 lg:columns-4">
          {images.map((item) => (
            <div className="mb-8 overflow-hidden rounded-lg" key={item.img}>
              <Card src={item.img} title={item.title} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
