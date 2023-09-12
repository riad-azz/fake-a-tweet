import { cn } from "@/utils";

const Header = () => {
  return (
    <header className="flex h-12 w-full items-center justify-between bg-white px-4 py-2 shadow-sm">
      {/* Logo */}
      <div
        className={cn(
          "mb-4 mt-4 select-none text-center text-xl font-bold md:text-2xl",
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
        <a
          target="_blank"
          href="https://github.com/riad-azz/fake-a-tweet/issues"
          className="block font-light hover:underline"
        >
          Report Issues
        </a>
      </div>
    </header>
  );
};

export default Header;
