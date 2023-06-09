import { ReactNode } from 'react';

const Centerdiv = ({ children }: { children: ReactNode }) => {
  return (
    <div className="px-4 w-full max-w-7xl mx-auto">{children}</div>
  );
};

export default Centerdiv;
