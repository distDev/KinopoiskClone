import { FC } from "react";



const ContainerCol:FC = ({ children }) => {
  return <div className='container'>
      {children}
  </div>;
};

export default ContainerCol
