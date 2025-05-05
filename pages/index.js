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
            1500. The corpus includes mainly diocesan statutes and provincial
            canons, but other genres appear on occasion. The database currently
            includes more than 1700 texts, accounting for nearly ninety percent
            of the extant material from the thirteenth and fourteenth centuries.
            Future updates will extend the chronological coverage into the
            fifteenth century.
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
            <Link href="/tutorials">
                <a>navigate</a>
            </Link>{' '}
            the database. Valuable advice for first-time users can also be found{' '}
            <a target="_blank" href="/files/advice_for_first_time_users.pdf">
                here
            </a>
            . For further details, please contact the project leader, Rowan
            Dorin (
            <a href="mailto:dorin@stanford.edu" target="_blank">
                dorin@stanford.edu
            </a>
            ).
        </p>

        <p>
            [Initial Project Release: June 30, 2021; last updated May 05, 2025.
            For a list of edits since the preceding update (on October 31,
            2022), see{' '}
            <a target="_blank" href="/files/addenda_et_corrigenda.pdf">
                here
            </a>
            ]
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
