import { Header } from './Header';

interface Props {}

export const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};
