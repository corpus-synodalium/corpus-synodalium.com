import Head from 'next/head';

const DigitalAtlas = () => (
    <>
        <Head>
            <title>Corpus Synodalium | Digital Atlas</title>
        </Head>
        <h2>Digital Atlas</h2>
        <h5 className="sub-heading mb-2rem">
            Digital Atlas of Dioceses and Ecclesiastical Provinces in Late
            Medieval Europe (1200-1500)
        </h5>
        <p>
            Among the novel features of the <i>Corpus Synodalium</i> database is
            the ability to visualize search results spatially via the new{' '}
            <i>
                Digital Atlas of Dioceses and Ecclesiastical Provinces in Late
                Medieval Europe (1200-1500)
            </i>
            , for which Rowan Dorin served as the General Editor and Clara
            Romani served as Co-Editor and Lead Developer. The{' '}
            <i>Digital Atlas</i> was generated from 2016-2021 in tandem with the
            Corpus Synodalium project, with Thawsitt Naing responsible for
            integrating the atlas and database via the custom-designed online
            mapping tool.
        </p>

        <p>
            Rather than corresponding to any particular year, the boundaries
            used in this mapping tool represent an amalgam of all Latin dioceses
            and ecclesiastical provinces that existed at some point during the
            period 1200-1500. The map excludes jurisdictions in the Latin East
            and in parts of eastern Europe whose boundaries are unknown (or were
            never established).
        </p>

        <p>
            Boundary files and supplementary documentation can be found{' '}
            <a href="https://doi.org/10.25740/rh195hm5975" target="_blank">
                here
            </a>
            . The boundary files are freely available for public reuse under a
            Creative Commons Attribution 3.0 Unported License. Corrections and
            suggestions for improving the <i>Digital Atlas</i> are very welcome.
        </p>

        <p>
            The <i>Corpus Synodalium</i> project has initiated a collaboration
            with{' '}
            <a
                href="https://www.lhlt.mpg.de/3475505/02-albani-orbis-dioecesium-jp?c=2136899"
                target="_blank"
            >
                Orbis Dioecesium
            </a>
            , a project led by{' '}
            <a href="https://www.lhlt.mpg.de/albani/en.html" target="_blank">
                Benedetta Albani
            </a>{' '}
            (Frankfurt, Max Planck Institute for Legal History and Legal
            Theory), aimed at integrating the data of both projects and making
            them accessible through a single platform.
        </p>
    </>
);

export default DigitalAtlas;
