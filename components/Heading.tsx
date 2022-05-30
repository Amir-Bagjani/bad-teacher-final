const Heading = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="heading">
      {children}
      <div className="circle" />
    </div>
  );
};

export default Heading;
