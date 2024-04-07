export const H1 = ({ children, className }) => (
  <h1 className={`${className} capitalize font-semibold text-2xl leading-loose`}>{children}</h1>
);
H1.propTypes;

export const H2 = ({ children, className }) => (
  <h2 className={`${className} capitalize font-semibold text-xl`}>{children}</h2>
);
H2.propTypes;

export const H3 = ({ children, className }) => <h3 className={`${className} capitalize font-medium`}>{children}</h3>;
H3.propTypes;

export const H4 = ({ children, className }) => (
  <h4 className={`${className} capitalize font-medium mt-2 mb-1`}>&#11166; {children}</h4>
);
H4.propTypes;

export const Pre = ({ children }) => <pre className={`overflow-x-scroll text-xs`}>{children}</pre>;
Pre.propTypes;
