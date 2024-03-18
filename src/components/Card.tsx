import Image from "next/image";

type Props = {
  src: string;
  title: string;
};

export default ({ src, title }: Props) => (
  <div className="relative cursor-pointer">
    <img className="rounded object-cover" src={src} />
    {/* <Image */}
    {/*   src={src} */}
    {/*   className="rounded object-cover" */}
    {/*   alt={title} */}
    {/*   // smaller than 1200x800 */}
    {/*   height={800} */}
    {/*   width={1040} */}
    {/*   // sizes="(min-width: 1040px) calc(50vw - 158px), calc(50vw - 84px)" */}
    {/*   // fill */}
    {/* /> */}

    <div className="absolute bottom-0 h-24 w-full bg-gradient-to-t from-black to-transparent px-4 pt-6">
      <div className="text-lg text-white">{title}</div>
      <div className="text-sm text-gray-400">Photographer</div>
    </div>
  </div>
);
