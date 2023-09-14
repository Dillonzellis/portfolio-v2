type MyLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const SomeDank = ({ children, ...props }: MyLinkProps) => {
  return <a {...props}>{children}</a>;
};

export const Dank = () => {
  return (
    <SomeDank href="/" target="" onClick={() => console.log("yea")}>
      some dank
    </SomeDank>
  );
};
