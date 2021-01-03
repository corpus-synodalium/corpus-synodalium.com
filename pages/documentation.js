const documentation = () => (
    <main role="main" className="inner cover" id="text-body">
        <br />
        <div className="jumbotron">
            <h2>Documentation</h2>
            <hr className="my-4" />
            <p>
                The following documents offer helpful information concerning the
                current state of the text corpus; project terminology and
                metadata explanations; search functionality; and the underlying
                transcription and editorial guidelines.
            </p>
            <br />
            <p className="lead">
                <a
                    className="btn btn-primary btn-lg"
                    href="/files/progress_report.pdf"
                    target="_blank"
                    role="button"
                >
                    CoSyn Progress Report (PDF)
                </a>
            </p>
            <p className="lead">
                <a
                    className="btn btn-primary btn-lg"
                    href="/files/search_syntax.pdf"
                    target="_blank"
                    role="button"
                >
                    Philologic Search Syntax (PDF)
                </a>
            </p>
            <p className="lead">
                <a
                    className="btn btn-primary btn-lg"
                    href="/files/guide_to_database_fields.pdf"
                    target="_blank"
                    role="button"
                >
                    Guide to the Database Fields (PDF)
                </a>
            </p>
            <p className="lead">
                <a
                    className="btn btn-primary btn-lg"
                    href="/files/transcription_guidelines.pdf"
                    target="_blank"
                    role="button"
                >
                    Transcription & Editorial Guidelines (PDF)
                </a>
            </p>
        </div>
    </main>
);

export default documentation;
