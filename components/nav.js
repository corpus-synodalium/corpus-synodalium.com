import Link from 'next/link';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link href="/">
                <a className="navbar-brand">Corpus Synodalium</a>
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navigation"
                aria-controls="navigation"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navigation">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link">Home</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about">
                            <a className="nav-link">About</a>
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            data-toggle="dropdown"
                            href="#"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Using the Database
                        </a>
                        <div
                            className="dropdown-menu"
                            x-placement="bottom-start"
                        >
                            <Link href="/citation">
                                <a className="dropdown-item">
                                    Citation Guidelines
                                </a>
                            </Link>

                            <Link href="/documentation">
                                <a className="dropdown-item">Documentation</a>
                            </Link>

                            <Link href="/tutorials">
                                <a className="dropdown-item">Tutorials</a>
                            </Link>

                            <div className="dropdown-divider"></div>

                            <a
                                className="dropdown-item"
                                href="https://corpus-synodalium.com/philologic/corpus/"
                                target="_blank"
                            >
                                Original Database
                            </a>
                            <a
                                className="dropdown-item"
                                href="https://corpus-synodalium.com/philologic/corpusnorm/"
                                target="_blank"
                            >
                                Normalized Database
                            </a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link href="/repertory">
                            <a className="nav-link">Repertory</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/digital_atlas">
                            <a className="nav-link">Digital Atlas</a>
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            data-toggle="dropdown"
                            href="#"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Learn More
                        </a>
                        <div className="dropdown-menu" id="last-dropdown-menu">
                            <Link href="/acknowledgments">
                                <a className="dropdown-item">Acknowledgments</a>
                            </Link>

                            <Link href="/bibliography">
                                <a className="dropdown-item">Bibliography</a>
                            </Link>

                            <Link href="/publications">
                                <a className="dropdown-item">Publications</a>
                            </Link>

                            <Link href="/further_resources">
                                <a className="dropdown-item">
                                    Further Resources
                                </a>
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
