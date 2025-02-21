import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import Logo from '../images/logo.png';
import LogOutBox from './LogOutBox';
import { Button } from './LogOutStyled';

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 750px; /* Set a minimum height to fill the viewport */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  padding-top: 5px;
  overflow-y: auto; /* Enable vertical scrolling when content exceeds viewport height */
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const LogoutLink = styled(Link)`
  margin-top: auto;
  font-size: 18px;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  &:hover {
    background: #1f232d;
  }
  background: rgb(85, 82, 82);
  width: 250px;
  margin-bottom: 0px;
  text-align: center;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const docBody = document.body;
  isModalOpen ? docBody.classList.add('overflow_hide') : docBody.classList.remove('overflow_hide');

  useEffect(() => {
    const outsideClose = (e) => {
      if (e.target.className === 'modal_centered') {
        setIsModalOpen(false);
      }
    };

    window.addEventListener('click', outsideClose);

    return () => {
      window.removeEventListener('click', outsideClose);
    };
  }, [isModalOpen]);

  useEffect(() => {
    const escapeClose = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    window.addEventListener('keydown', escapeClose);

    return () => {
      window.removeEventListener('keydown', escapeClose);
    };
  }, [isModalOpen]);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <img src={Logo} style={{ width: '50px', marginLeft: '95px', marginBottom: '20px', marginTop: '20px' }} alt="Logo" />
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>

          <Button
            style={{ marginTop: 'auto', fontSize: '18px', background: 'grey', color: 'white' }}
            type="button"
            onClick={() => setIsModalOpen(true)}
            className='btnl'
          >
            <FaIcons.FaSignOutAlt /><span> </span>
            Log Out
          </Button>

          <LogOutBox
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
