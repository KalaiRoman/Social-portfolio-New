import { Home } from "../pages/Pages";

const routingDatas = [
  {
    id: 1,
    name: "Home",
    component: <Home />,
    exact: true,
    sidebar: false,
    index: true,
    path: "/",
    auth: false,
  },
  // {
  //   id: 2,
  //   name: "Home",
  //   component: <Home />,
  //   exact: true,
  //   sidebar: false,
  //   index: true,
  //   path: "/home",
  //   auth: false,
  // },
];

export default routingDatas;
