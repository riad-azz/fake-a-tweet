import { cn } from "@/utils";

const Navbar = () => {
  return (
    <nav
      className={cn(
        "flex h-12 w-full items-center justify-between bg-white shadow-sm",
        "px-2 py-2 lg:px-4"
      )}
    >
      {/* Logo */}
      <div
        className={cn(
          "my-4 select-none text-center text-xl font-bold md:text-2xl",
          "animate-text bg-gradient-to-r from-blue-400 via-purple-600 to-blue-600 bg-clip-text  text-transparent"
        )}
      >
        <span>Fake A Tweet</span>
      </div>
      <div className="flex items-center gap-4">
        <a
          target="_blank"
          href="https://twitter.com/riadazz"
          className="block font-light hover:underline md:text-lg"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
