import { AppBar, Toolbar, styled } from "@mui/material";

import { NavLink } from "react-router-dom";

const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled(NavLink)`
  color: #ffffff;
  margin-right: 20px;
  text-decoration: none;
  font-size: 20px;
`;

const NavBar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <Tabs to="./" exact>
          Add User
        </Tabs>
        <Tabs to="all" exact>
          All Users
        </Tabs>
      </Toolbar>
    </Header>
  );
};

export default NavBar;
