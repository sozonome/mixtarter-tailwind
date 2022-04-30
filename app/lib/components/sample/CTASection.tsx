import { AiFillGithub } from "react-icons/ai";

const repoLink = "https://github.com/sozonome/mixtarter-tailwind";

const CTASection = () => {
  return (
    <div className="grid gap-2 text-center mt-8">
      <div className="flex my-4 justify-center gap-2">
        <a
          aria-label="Deploy to Vercel"
          target="_blank"
          href="https://vercel.com/import/git?s=https://github.com/sozonome/mixtarter-tailwind"
          rel="noreferrer"
        >
          <img src="https://vercel.com/button" alt="Vercel deploy button" />
        </a>

        <a
          aria-label="Deploy to Netlify"
          target="_blank"
          href="https://app.netlify.com/start/deploy?repository=https://github.com/sozonome/mixtarter-tailwind"
          rel="noreferrer"
        >
          <img
            src="https://www.netlify.com/img/deploy/button.svg"
            alt="Netlify deploy button"
          />
        </a>
      </div>

      <div className="my-2 break-words">
        <code className="bg-gray-300">
          npx degit sozonome/mixtarter-tailwind {"<YOUR_APP_NAME>"}
        </code>

        <div className="mt-2">
          <a
            href="https://github.com/sozonome/mixtarter-tailwind/generate"
            target="_blank"
            rel="noreferrer"
            className="btn text-sm"
          >
            Use This Template
          </a>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2">
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn text-sm flex gap-2 items-center"
        >
          <AiFillGithub />
          Open in Github
        </a>
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm"
        >
          <img
            src="https://img.shields.io/github/stars/sozonome/mixtarter-tailwind?style=social"
            alt="github stars"
          />
        </a>
      </div>
    </div>
  );
};

export default CTASection;
