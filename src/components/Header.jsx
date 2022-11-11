import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="bg-gray-300 flex justify-between items-center py-2 px-4">
      <h1 className="font-bold text-2xl">Brand Name</h1>
      <NavBar />
    </header>
  );
};

export default Header;
