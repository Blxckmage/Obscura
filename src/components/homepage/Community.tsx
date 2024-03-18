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
      <div className="mx-auto flex min-h-screen flex-col px-3">
        <h1 className="flex items-center p-4 text-5xl font-bold">
          <ChevronRight size={43} strokeWidth={4} />
          <span>Community</span>
        </h1>
        <div className="lg:column-4 columns-3 gap-4 px-16 py-8">
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

// export default function Community() {
//   return (
//     <div className="mx-auto flex min-h-screen flex-col px-3">
//       <div className="h-full w-full pt-16">
//         <h1 className="flex items-center text-5xl font-bold">
//           <ChevronRight size={43} strokeWidth={4} />
//           <span>Community</span>
//         </h1>
//         <div className="grid h-[70vh] max-h-fit auto-cols-max grid-cols-2 gap-4 p-6 lg:grid-cols-4">
//           <div className="relative col-span-1 flex h-full">
//             <Image
//               src="/assets/home-2.png"
//               alt="alt"
//               className="w-full object-contain"
//               quality={100}
//               fill={true}
//               sizes="(min-width: 1040px) calc(27vw - 67px), calc(50vw - 44px)"
//             />
//           </div>
//           <div className="relative col-span-1 h-full">
//             <Image
//               src="/assets/home-3.png"
//               alt="alt"
//               className="w-full object-contain"
//               quality={100}
//               fill={true}
//               sizes="(min-width: 1040px) calc(25vw - 67px), calc(50vw - 44px)"
//             />
//           </div>
//           <div className="relative col-span-1 flex h-full">
//             <Image
//               src="/assets/home-1.png"
//               alt="alt"
//               className="w-full object-contain"
//               quality={100}
//               fill={true}
//               sizes="(min-width: 1040px) calc(25vw - 67px), calc(50vw - 44px)"
//             />
//           </div>
//           <div className="relative col-span-1 flex h-full">
//             <Image
//               src="/assets/home-2.png"
//               alt="alt"
//               className="w-full object-contain"
//               quality={100}
//               fill={true}
//               sizes="(min-width: 1040px) calc(25vw - 67px), calc(50vw - 44px)"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
