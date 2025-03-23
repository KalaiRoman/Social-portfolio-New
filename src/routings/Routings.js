import React from "react";
import routingDatas from "../middleware/RoutingDatas";
import { Route, Routes } from "react-router-dom";
import ProtectedRouters from "../middleware/ProtectedRouters";
import { Home, Instagram, WhatsApp } from "../pages/Pages";

function Routings() {
  return (
    <div>
      <Routes>
        {/* {routingDatas?.map((item, index) =>
          item?.auth ? (
            <Route key={index}>
              <Route element={item?.component} path={item?.path} />
            </Route>
          ) : null
        )}
        {routingDatas?.map((item, index) =>
          !item?.auth ? (
            <Route key={index} element={<ProtectedRouters />}>
              <Route
                element={item?.component}
                path={item?.path}
                exact={item?.exact}
                index={item?.index}
              />
            </Route>
          ) : null
        )} */}
        <Route element={<Home />}>
          <Route path="/" element={<WhatsApp />} />
          <Route path="/instagram" element={<Instagram />} />

        </Route>
      </Routes>
    </div>
  );
}

export default Routings;
