import MainHeader from "./MainHeader";

interface LayoutType {
  children: JSX.Element;
}

const Layout: React.FC<LayoutType> = ({ children }) => {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
};

export default Layout;
