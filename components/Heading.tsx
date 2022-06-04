import { ComponentProps } from "react";

const Heading = ({children, ...rest}: ComponentProps<'div'>) => {
  return (
    <div className="heading" {...rest}>
      {children}
      <div className="circle" />
    </div>
  );
};

export default Heading;
