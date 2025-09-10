import { Outlet, useLocation, useMatches } from 'react-router-dom';
import Header from '../components/layout/Header';
import TopBar from '../components/layout/TopBar';
import Footer from '../components/layout/Footer';

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const matches = useMatches();
  const current = matches[matches.length - 1];

  const topBarTitle =
    (current?.handle as { topBarTitle?: string | null })?.topBarTitle ?? null;
  const hideFooter =
    (current?.handle as { hideFooter?: boolean })?.hideFooter ?? false;
  const hideTopBar =
    (current?.handle as { hideTopBar?: boolean })?.hideTopBar ?? false;

  return (
    <div className="flex h-screen w-full flex-col gap-5">
      {isHome ? <Header /> : !hideTopBar && <TopBar>{topBarTitle}</TopBar>}
      <main>
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;
