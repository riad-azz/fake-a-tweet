import React from "react";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col p-4 text-center">
      <span className="text-sm">© 2023 Fake A Tweet</span>
      <span className="text-xs">
        Made by
        <a
          target="_blank"
          href="https://github.com/riad-azz"
          className="ml-1 text-gray-900 hover:underline"
        >
          @riad-azz
        </a>
      </span>
    </footer>
  );
};

export default Footer;
