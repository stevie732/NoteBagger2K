import * as React from 'react';
import { Container, Navbar } from 'react-bootstrap';

type IHeaderProps = object;

const Header: React.FunctionComponent<IHeaderProps> = () => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          Note-Bagger 2K
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;