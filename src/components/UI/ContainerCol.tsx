

interface IContainerCol {
  children: any;
}

const ContainerCol = ({ children }: IContainerCol) => {
  return <div className='container'>
      {children}
  </div>;
};

export default ContainerCol
