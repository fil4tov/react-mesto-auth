import React, {Suspense} from 'react';
import {Outlet} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";

const Layout = () => {
  return (
    <>
      <Header/>
      <main className='main'>
        <Suspense fallback={<Loader/>}>
          <Outlet/>
        </Suspense>
      </main>
      <Footer/>
    </>
  );
};

export default Layout;