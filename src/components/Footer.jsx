const Footer = () => {
  return (
    <footer className="h-16 border-t">
      <div className="flex h-full items-center justify-center">
        <div className="order-2 sm:order-1">
          Copyright <sup>&copy;</sup> {new Date().getFullYear()}{" "}
          <a
            href="https://mkhotamirais.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-600 hover:underline"
          >
            mkhotami
          </a>
        </div>{" "}
      </div>
    </footer>
  );
};

export default Footer;
