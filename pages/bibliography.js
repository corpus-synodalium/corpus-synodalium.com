import Head from 'next/head';

const Bibliography = () => (
    <>
        <Head>
            <title>Corpus Synodalium | Bibliography</title>
        </Head>
        <div className="jumbotron">
            <h2>Bibliography</h2>
            <hr className="my-4" />
            <p>
                Please refer to the PDF file below for complete citations of
                manuscript and printed sources used in the repertory and
                database.
            </p>
            <br />
            <p className="lead">
                <a
                    className="btn btn-primary btn-lg"
                    href="/files/bibliography.pdf"
                    target="_blank"
                    role="button"
                >
                    Bibliography (PDF)
                </a>
            </p>
        </div>
    </>
);

export default Bibliography;
