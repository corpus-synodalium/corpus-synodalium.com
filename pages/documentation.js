import Head from 'next/head';

const Documentation = () => (
    <>
        <Head>
            <title>Corpus Synodalium | Documentation</title>
        </Head>
        <div className="jumbotron">
            <h2>Documentation</h2>
            <hr className="my-4" />
            <p>
                The following documents offer helpful information concerning the
                development and technical underpinnings of this project; the
                current state of the text corpus; project terminology and
                metadata explanations; search functionality; and the underlying
                transcription and editorial guidelines.
            </p>
            <div className="documentation-buttons-container">
                <p className="lead">
                    <a
                        className="btn btn-primary btn-lg btn-documentation"
                        href="/files/project_narrative_technical_overview.pdf"
                        target="_blank"
                        role="button"
                    >
                        CoSyn Project Narrative and Technical Overview (PDF)
                    </a>
                </p>
                <p className="lead">
                    <a
                        className="btn btn-primary btn-lg btn-documentation"
                        href="/files/progress_report.pdf"
                        target="_blank"
                        role="button"
                    >
                        CoSyn Progress Report (PDF)
                    </a>
                </p>
                <p className="lead">
                    <a
                        className="btn btn-primary btn-lg btn-documentation"
                        href="/files/search_syntax.pdf"
                        target="_blank"
                        role="button"
                    >
                        Philologic Search Syntax (PDF)
                    </a>
                </p>
                <p className="lead">
                    <a
                        className="btn btn-primary btn-lg btn-documentation"
                        href="/files/guide_to_database_fields.pdf"
                        target="_blank"
                        role="button"
                    >
                        Guide to the Database Fields (PDF)
                    </a>
                </p>
                <p className="lead" style={{ marginBottom: 0 }}>
                    <a
                        className="btn btn-primary btn-lg btn-documentation"
                        href="/files/transcription_guidelines.pdf"
                        target="_blank"
                        role="button"
                    >
                        Transcription & Editorial Guidelines (PDF)
                    </a>
                </p>
            </div>
            <p>
                Users wishing to work directly with the raw text corpus and its
                associated metadata can download the files from the Stanford
                Digital Repository{' '}
                <a href="https://purl.stanford.edu/zr170fy8693" target="_blank">
                    here
                </a>
                .
            </p>
            <p>
                The boundary files used to create the mapping tool can be
                downloaded via the Digital Atlas of Dioceses and Ecclesiastical
                Provinces in Late Medieval Europe, 1200-1500{' '}
                <a
                    href="https://searchworks.stanford.edu/view/ds112yt9877"
                    target="_blank"
                >
                    here
                </a>
                .
            </p>
        </div>
    </>
);

export default Documentation;
