import React from 'react'
import Navbar from '@components/Navbar/Navbar'
// import Footer from '@components/Footer'

const Layout: React.FC = ({ children }) => {
    return(
        <>
            <Navbar />
            {children}
            <footer>This is the footer</footer>
        </>
    )
}

export default Layout
