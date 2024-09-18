import Icon from "@mdi/react";
import { mdiGithub } from "@mdi/js";

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Soy728/next-js-blog"
          >
            <Icon path={mdiGithub} size={1} />
            <p className="ml-2 h-7">github</p>
          </a>
        </li>
      </ul>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
        © Powered by sohee lee
      </p>
    </footer>
  );
}
