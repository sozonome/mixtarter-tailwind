const Footer = () => {
  return (
    <footer className="flex items-center">
      <p className="text-sm">
        {new Date().getFullYear()} -{" "}
        <a href="https://sznm.dev" target="_blank" rel="noreferrer">
          sznm.dev
        </a>
      </p>
    </footer>
  );
};

export default Footer;
