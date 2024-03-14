import ActionButton from "./ActionButtons";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 flex items-center justify-between bg-black p-4 text-white lg:hidden">
      <h1 className="text-xl font-bold">Obscura Nav</h1>
      {/* <ActionButton /> */}
    </nav>
  );
}
