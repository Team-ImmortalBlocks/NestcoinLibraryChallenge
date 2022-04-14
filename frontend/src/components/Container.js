import { Fragment } from "react";
import Nav from "./Nav";
import SearchBox from "./SearchBox";
import FeaturedBooks from "./FeaturedBooks";
import MyBooks from "./MyBooks";

const AppContainer = () => (
  <Fragment>
    <Nav />
    <SearchBox />
    <FeaturedBooks />
    <MyBooks />
  </Fragment>
);

export default AppContainer;
