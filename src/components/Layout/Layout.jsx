import React, { Fragment } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import Whatsapp from "../UI/Whatsapp";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <div>
        <Routers />
      </div>
      <Whatsapp/>
      <Footer />
    </Fragment>
  );
};

export default Layout;
