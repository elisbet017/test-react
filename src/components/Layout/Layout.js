import { Outlet, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

const Layout = () => {
  const location = useLocation();
  console.log(location);

  return (
    <>
      {!location.pathname.includes('details') && (
        <header>
          <Navigation />
        </header>
      )}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
