import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';

const LayoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const Menu = styled.div`
    background-color: #f2f2f2;
    padding: 20px;
    flex: 1;
    height: 100%;
    @media (min-width: 768px) {
        flex: 0.2;
    }
`;

const Content = styled.div`
    background-color: #ffffff;
    padding: 20px;
    flex: 1;
    height: 100%;
    @media (min-width: 768px) {
        flex: 0.8;
    }
`;

const Layout = ({ children }) => {
    return (
        <LayoutContainer>
            <Menu>
               <Sidebar />
            </Menu>
            <Content>
                {children}
            </Content>
        </LayoutContainer>
    );
};

export default Layout;
