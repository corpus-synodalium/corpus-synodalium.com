import { Footer } from './footer';
import { DefaultHead } from './head';
import { NavBar } from './nav';

export const Layout = ({ children }) => {
    return (
        <>
            <DefaultHead />
            <NavBar />
            <div className="cover-container d-flex w-100 h-100 mx-auto flex-column">
                <main role="main" className="inner cover" id="text-body">
                    {children}
                </main>
            </div>
            <Footer />
        </>
    );
};
