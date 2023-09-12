import { cn } from "@/utils";

const Header = () => {
  return (
    <header
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
          href="https://github.com/riad-azz"
          className="block font-light hover:underline"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
