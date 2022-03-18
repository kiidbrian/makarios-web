import React, { useState, useContext } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Logout from '../login/googleLogout';
import { Context } from '../../store';

const NavBarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, dispatch] = useContext(Context);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md" className="sticky-top">
      <NavbarBrand>LHI-Admin</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <Link to="/dashboard">
            <NavItem>
              <NavLink href="/dashboard">Dashboard</NavLink>
            </NavItem>
          </Link>
          <Link to="/members">
            <NavItem>
              <NavLink href="/">Members</NavLink>
            </NavItem>
          </Link>
          <Link to="/sms">
            <NavItem>
              <NavLink href="/">Messaging</NavLink>
            </NavItem>
          </Link>
          <Link to="/tithes/create">
            <NavItem>
              <NavLink href="/">Tithes</NavLink>
            </NavItem>
          </Link>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Bulk Tasks
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <Link to="/">Bulk SMS</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/">Upload Excel</Link>
              </DropdownItem>
              <DropdownItem>
                <Link to="/">Generate Reports</Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <UncontrolledDropdown inNavbar>
          <NavbarText>
            <DropdownToggle nav caret>
              {state.currentUser.name + ' '}
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Profile</DropdownItem>
              <DropdownItem>Settings</DropdownItem>
              <DropdownItem divider />
              <Logout dispatch={dispatch} />
            </DropdownMenu>
          </NavbarText>
        </UncontrolledDropdown>
      </Collapse>
    </Navbar>
  );
};

export default NavBarComponent;
