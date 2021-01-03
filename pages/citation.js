import Link from 'next/link';

const Citation = () => (
    <>
        <h2 className="mb-2rem">Citation Guidelines</h2>
        <p>
            Anyone is welcome to use this project (including the repertory,
            searchable database, and corpus of transcriptions) for the purposes
            of teaching and research. If the project proves useful to you,
            please acknowledge it in any resulting publications in order to
            spread awareness of it among the broader scholarly community.
        </p>

        <p>
            Here is a sample citation for referencing the project or database as
            a whole:
        </p>

        <p className="sample-citation">
            Dorin, Rowan, ed.{' '}
            <i>
                Corpus Synodalium: Local Ecclesiastical Legislation in Medieval
                Europe
            </i>
            , 30 June 2021, www.corpus-synodalium.com. Accessed DD/MM/YYYY.
        </p>

        <p>To cite the working repertory:</p>

        <p className="sample-citation">
            Dorin, Rowan. “A Repertory of Synodal Statutes and Provincial
            Canons, 1200-1500.” <i>Corpus Synodalium</i>, 30 June 2021,
            www.corpus-synodalium.com/repertory. Accessed DD/MM/YYYY.
        </p>

        <p>
            When referencing individual texts that have been located via the
            searchable database, users should first confirm readings found in
            the online transcriptions against the sources from which they were
            drawn (whether printed editions or manuscripts), insofar as this is
            feasible. These sources are indicated in abbreviated form in both
            the working{' '}
            <Link href="/repertory">
                <a>repertory</a>
            </Link>{' '}
            and the metadata for each database text, under the headings “Source”
            (which lists important manuscript versions) and/or “Edition”, along
            with links to online digital versions where available. For full
            bibliographic references, consult the{' '}
            <Link href="/bibliography">
                <a>Bibliography</a>
            </Link>
            . Published citations should be made to these originating sources,
            as appropriate, accompanied by a general acknowledgment of the
            Corpus Synodalium project.
        </p>

        <p>
            Should you wish to cite one of the database texts directly (whether
            because the originating source is inaccessible, or because the
            transcription is newly created for the project), you are encouraged
            to include the text’s unique <i>Record ID</i> in the citation. (This
            is a four-digit number that appears alongside the header information
            whenever a result from the text is displayed.)
        </p>

        <p>
            If you have any questions, or need help tracking down a source,
            please feel free to reach out to the project leader, Rowan Dorin (
            <a href="mailto:dorin@stanford.edu">dorin@stanford.edu</a>
            ).
        </p>
    </>
);

export default Citation;
