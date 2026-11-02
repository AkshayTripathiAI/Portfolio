import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ChatWidget from './ChatWidget';

function Layout() {
  const { pathname, hash } = useLocation();

  // Start each page at the top, unless the URL targets an anchor on the page.
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <div className="app">
      <Header />
      <main className="app-main">
        <Outlet />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default Layout;
