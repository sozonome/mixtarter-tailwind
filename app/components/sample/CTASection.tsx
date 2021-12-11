import { AiFillGithub } from "react-icons/ai";

const repoLink = "https://github.com/sozonome/mixtarter-chakra";

const CTASection = () => {
  return (
    <div>
      <div>
        <a
          aria-label="Deploy to Vercel"
          target="_blank"
          href="https://vercel.com/import/git?s=https://github.com/sozonome/mixtarter-chakra"
        >
          <img src="https://vercel.com/button" alt="Vercel deploy button" />
        </a>

        <a
          aria-label="Deploy to Netlify"
          target="_blank"
          href="https://app.netlify.com/start/deploy?repository=https://github.com/sozonome/mixtarter-chakra"
        >
          <img
            src="https://www.netlify.com/img/deploy/button.svg"
            alt="Netlify deploy button"
          />
        </a>
      </div>

      <div>
        <code>npx degit sozonome/mixtarter-chakra {"<YOUR_APP_NAME>"}</code>
        <br />

        <a
          href="https://github.com/sozonome/mixtarter-chakra/generate"
          target="_blank"
        >
          Use This Template
        </a>
      </div>

      <div>
        <a href={repoLink} target="_blank">
          <AiFillGithub />
          Open in Github
        </a>
        <a href={repoLink} target="_blank">
          <img
            src="https://img.shields.io/github/stars/sozonome/mixtarter-chakra?style=social"
            alt="github stars"
          />
        </a>
      </div>
    </div>
  );
};

export default CTASection;
