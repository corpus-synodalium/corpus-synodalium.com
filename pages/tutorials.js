import Head from 'next/head';
import Link from 'next/link';

const Tutorial = () => (
    <>
        <Head>
            <title>Corpus Synodalium | Tutorials</title>
        </Head>
        <div className="jumbotron">
            <h2>Tutorials</h2>
            <hr className="my-4" />
            <p>
                The following tutorials are designed to orient new users to the
                various search, analysis, and visualization functions of the
                Corpus Synodalium database. They are by no means exhaustive, so
                be sure to consult the{' '}
                <Link href="/documentation">
                    <a>documentation</a>
                </Link>{' '}
                page for other useful information.
            </p>
            <div className="documentation-buttons-container">
                <p className="lead">
                    <a
                        className="btn btn-primary btn-lg btn-documentation"
                        href="/files/tutorial_01_word_search.pdf"
                        target="_blank"
                        role="button"
                    >
                        1. Word Search (PDF)
                    </a>
                </p>
                <p className="lead">
                    <a
                        className="btn btn-primary btn-lg btn-documentation"
                        href="/files/tutorial_02_place_search.pdf"
                        target="_blank"
                        role="button"
                    >
                        2. Place Search (PDF)
                    </a>
                </p>
                <p className="lead">
                    <a
                        className="btn btn-primary btn-lg btn-documentation"
                        href="/files/tutorial_03_mapping_tool.pdf"
                        target="_blank"
                        role="button"
                    >
                        3. Mapping Tool (PDF)
                    </a>
                </p>
                <p className="lead">
                    <a
                        className="btn btn-primary btn-lg btn-documentation"
                        href="/files/advice_for_first_time_users.pdf"
                        target="_blank"
                        role="button"
                    >
                        Advice for first time users (PDF)
                    </a>
                </p>
            </div>
        </div>
    </>
);

export default Tutorial;
