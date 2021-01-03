import { Footer } from './footer';
import { DefaultHead } from './head';
import { NavBar } from './nav';

export const Layout = ({ children }) => {
    return (
        <>
            <DefaultHead />
            <NavBar />
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                {children}
            </div>
            <Footer />
        </>
    );
};
