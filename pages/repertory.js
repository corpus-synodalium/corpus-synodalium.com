import Head from 'next/head';
import Link from 'next/link';

const Repertory = () => (
    <>
        <Head>
            <title>Corpus Synodalium | Repertory</title>
        </Head>
        <h2>Repertory</h2>
        <h5 className="sub-heading mb-2rem">
            A Repertory of Synodal Statutes and Provincial Canons, 1200-1500
        </h5>
        <p>
            This is a repertory-in-progress of local ecclesiastical legislation
            (in whole or in part) that survives from Latin Christendom between
            1200-1500. Rowan Dorin began compiling the repertory in 2011, and it
            served as the basis for launching the full-text database project.
        </p>

        <p>
            The repertory includes mainly synodal/diocesan statutes and
            provincial canons, but other scattered genres appear on occasion. It
            includes selective references to existing editions and manuscripts
            of each text; fuller information can be found by consulting the
            individual editions or (where available) local repertories. It
            continues to be updated regularly based on further findings, so
            please share corrections and/or additions. Texts that have been
            added to the database are highlighted in light grey.
        </p>

        <p>
            The repertory is for public use, but users are kindly requested to
            acknowledge it in any research that draws on it. Citation guidelines
            may be found{' '}
            <Link href="/citation">
                <a>here</a>
            </Link>
            .
        </p>

        <p>[Repertory updated March 24, 2025]</p>

        <br />

        <p className="lead">
            <a
                className="btn btn-primary btn-lg"
                href="https://docs.google.com/spreadsheets/d/1ciizXBHXPCZyriK8JkkBGouOr6qByA0YT3PpDtYS6Iw/edit?usp=sharing"
                target="_blank"
                role="button"
            >
                Repertory (Google Sheets)
            </a>
        </p>

        <br />
    </>
);

export default Repertory;
