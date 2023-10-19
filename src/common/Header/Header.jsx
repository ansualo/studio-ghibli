import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import logo from '../../assets/logo.png'
import { SearchBar } from '../SearchBar/SearchBar';

export const Header = () => {
    return (
        <Navbar className="headerDesign" fixed="top">
            <Container className="flex-column flex-md-row"> 
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        className="d-inline-block align-top ghibliLogo"
                        alt="Studio Ghibli logo"
                    />
                </Navbar.Brand>
                <SearchBar />
            </Container>
        </Navbar>
    );
}
