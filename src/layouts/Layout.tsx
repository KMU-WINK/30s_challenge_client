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

  return (
    <div className="flex min-h-dvh w-full flex-col gap-5">
      {isHome ? <Header /> : <TopBar>{topBarTitle}</TopBar>}
      <main className="min-h-0 flex-1 overflow-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
