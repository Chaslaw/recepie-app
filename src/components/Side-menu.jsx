import { GiHamburgerMenu } from 'react-icons/gi'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SideMenu = () => {

    const showSideMenu = () => {
        const menu = document.querySelector('.menu-categories');
        menu.classList.toggle('show');
    }


    return (
        <>
            <HamburgerMenu>
                <GiHamburgerMenu onClick={showSideMenu} />
            </HamburgerMenu>

            <Menu>
                <ul className='menu-categories animate' onClick={showSideMenu}>
                    <List to={'/cuisine/Italian'}>Italian</List>
                    <List to={'/cuisine/American'}>American</List>
                    <List to={'/cuisine/Thai'}>Thai</List>
                    <List to={'/cuisine/Chinese'}>Japanese</List>
                </ul>
            </Menu>
        </>
    );
}

export default SideMenu;

const HamburgerMenu = styled.div`

display: none;

@media (max-width: 600px) {
display: flex;
}
`

const Menu = styled.div`
  
.menu-categories {
     display: flex;
     color: white;
     position: absolute;
     left: -280px;
     transition: 0.5s;
     flex-direction: column;
        justify-content: space-around;
        align-items: center;
        list-style-type: none;
         width: 280px;
         height: 300px;
         opacity: 0.9;
         z-index: 333;
         border-radius: 1rem;
         font-size: 26px;
         text-decoration: underline;
         background: #313131;
         border: 2px black solid;
         background: #313131;
         color: white;
         top: 5px;
}

@media (max-width: 600px) {
    .show{
    left: 5px;
    }
}
@media (max-width: 350px) {
    .show {width: 200px  };
}
`

const List = styled(NavLink)`
color: white;
`