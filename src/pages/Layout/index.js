import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Container from '@material-ui/core/Container';

const Layout = ({children}) => {
    return(
        <>
            <Header/>
                <div>
                    {children}
                </div>
            <Footer/>
        </>
    );
};

export default Layout;