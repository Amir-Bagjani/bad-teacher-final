const Section = ({ children, ...rest }: React.ComponentProps<"section">) => {
  return (
    <section {...rest}>
      <div className="wrapper">{children}</div>
    </section>
  );
};

export default Section;
