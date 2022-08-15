import { Navbar, Container, Nav } from "react-bootstrap"

const NavBar = () => {
    return (
        <div>
            <Navbar variant="dark" className="navtitle navbar navbar-expand-lg bg-dark fixed-top">
                <Container>
                    <Navbar.Brand href="/">GMOVIES</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#trending">TRENDING</Nav.Link>
                        <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar