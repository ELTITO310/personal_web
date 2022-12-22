import Nav from '@/components/layouts/nav';

const Layout = ({ children }) => {
    return <>
        <Nav />
        <main>{ children }</main>
    </>
}

export default Layout;