import Link from 'next/link';

const Home = () => (
    <>
        <h1>Corpus Synodalium</h1>
        <h5 className="sub-heading mb-2rem">
            Local Ecclesiastical Legislation in Medieval Europe /
            <br />
            Législations ecclésiastiques locales dans l’Europe médiévale
        </h5>

        <p>
            This is a database-in-progress of extant local ecclesiastical
            legislation issued across Latin Christendom from ca. 1215 - ca.
            1400. The corpus includes mainly diocesan statutes and provincial
            canons, but other genres appear on occasion. Currently, the database
            includes 1300 texts, with roughly 250 still to be added. Most of
            these texts have been taken from modern and early modern editions,
            but others have been transcribed directly from manuscripts.
        </p>

        <p>
            Spelling and editorial conventions vary considerably, whether in
            medieval manuscripts or their modern editions. The main corpus
            preserves this variety, but an alternate version is available in
            which the most frequent variants have been normalized (e.g.
            v&rarr;u, j&rarr;i, ae&rarr;e).
        </p>

        <p>
            The links above provide more information about the project, as well
            as important guidelines on how to{' '}
            <Link href="/citation">
                <a>cite</a>
            </Link>{' '}
            and{' '}
            <Link href="/documentation">
                <a>navigate</a>
            </Link>{' '}
            the database. For further details, please contact the project
            leader, Rowan Dorin (
            <a href="mailto:dorin@stanford.edu">dorin@stanford.edu</a>
            ).
        </p>

        <br />

        <p className="lead text-center">
            <a
                href="https://corpus-synodalium.com/philologic/corpus/"
                className="btn btn-primary home-page-btn"
                target="_blank"
            >
                Explore Database
            </a>
        </p>
        <p className="lead text-center">
            <a
                href="https://corpus-synodalium.com/philologic/corpusnorm/"
                className="btn btn-primary home-page-btn"
                target="_blank"
            >
                Normalized Database
            </a>
        </p>
        <br />
    </>
);

export default Home;
