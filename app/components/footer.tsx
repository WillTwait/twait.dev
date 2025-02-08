export default function Footer() {
  return (
    <footer className="absolute bottom-0 left-0 right-0 flex justify-between px-4">
      <ul className="font-sm flex flex-col text-neutral-600 md:flex-row md:space-x-4 md:space-y-0  ">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800"
            rel="noopener noreferrer"
            target="_blank"
            href="/rss"
          >
            <p className="ml-2 h-7">rss</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 "
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/vercel/next.js"
          >
            <p className="ml-2 h-7">Github</p>
          </a>
        </li>
      </ul>
    </footer>
  );
}
