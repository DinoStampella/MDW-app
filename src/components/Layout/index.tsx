import Footer from "../Footer";
import Header from "../Header";

const Layout = ({
  children,
}: {
  children:
    | string
    | number
    | React.ReactElement<
        unknown,
        string | React.JSXElementConstructor<unknown>
      >;
}) => {
  return (
    <div className="flex flex-col justify-between h-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
