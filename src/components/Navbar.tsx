import ActionButton from "./ActionButtons";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-40 flex items-center justify-between bg-zinc-950 p-4 text-zinc-50 lg:hidden">
      <h1 className="text-xl font-bold">Obscura</h1>
      <ActionButton />
    </div>
  );
}
