import { FC } from 'react';
import { Header } from './Header';

interface Props {}

export const Layout:FC = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};
