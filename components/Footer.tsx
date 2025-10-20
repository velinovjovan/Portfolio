import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer
      className="w-full pt-20 pb-10 bg-[#000319] font-outfit"
      id="#contact"
    >
      <div className="flex flex-col items-center px-20">
        <h1 className="text-4xl font-bold ">
          Got a <span className="text-purple-400">project</span> or{" "}
          <span className="text-purple-500">question</span>? Feel free to reach
          out!
        </h1>
        <p className="mt-10 text-gray-400 mb-5">
          Let’s connect! Click the button below to get in touch.
        </p>
        <a href="mailto:jowwanv@gmail.com" id="contact">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="w-full mt-16 flex justify-around">
        <p className="font-bold text-purple-300 text-center">
          © 2025 Jovan Velinov
        </p>
        <nav className="flex gap-10 items-center mb-8">
          <a
            className="cursor-pointer hover:text-purple-300 transition-all duration-500"
            href="https://github.com/velinovjovan"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
              className="fill-current"
            >
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.419 2.865 8.166 6.839 9.489.5.092.683-.217.683-.483 0-.238-.008-.868-.013-1.704-2.782.604-3.369-1.342-3.369-1.342-.455-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.089.636-1.34-2.22-.253-4.555-1.11-4.555-4.942 0-1.091.39-1.983 1.03-2.682-.103-.253-.446-1.272.098-2.653 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.91-1.296 2.75-1.026 2.75-1.026.545 1.381.202 2.4.099 2.653.64.699 1.03 1.591 1.03 2.682 0 3.842-2.337 4.685-4.565 4.932.359.309.678.919.678 1.852 0 1.338-.012 2.419-.012 2.745 0 .268.18.579.688.481A10.014 10.014 0 0 0 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
          <a
            className="cursor-pointer hover:text-purple-300 transition-all duration-500"
            href="https://www.linkedin.com/in/jovan-velinov-473b84356/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="24"
              height="24"
              className="fill-current"
            >
              <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.5s.88 2 1.98 2c1.1 0 1.98-.88 1.98-2s-.88-2-1.98-2zM3 8h3.96v12H3V8zm6.4 0h3.8v1.64h.06c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.66 4.8 6.12V20h-3.96v-5.62c0-1.34-.03-3.06-1.86-3.06-1.86 0-2.14 1.45-2.14 2.95V20H9.4V8z"></path>
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
