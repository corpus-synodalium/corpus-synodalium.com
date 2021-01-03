import Head from 'next/head';

const GA_ID = 'UA-135535706-2';

export const DefaultHead = () => (
    <Head>
        <title>Corpus Synodalium</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8" />
        <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
            name="description"
            content="This is a database-in-progress of extant local ecclesiastical legislation issued across Latin Christendom from ca. 1215 - ca. 1400."
        />
        <meta name="author" content="Rowan Dorin" />
        <link
            href="https://stackpath.bootstrapcdn.com/bootswatch/4.1.1/litera/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-+YpxMU1QQywaQtI3dMQAwIcu0vVDuOREjQPC59qblQHg9nTdcrUXMPnanUaldUnY"
            crossOrigin="anonymous"
        />
        <link
            href="https://fonts.googleapis.com/css?family=Lato|Libre+Baskerville"
            rel="stylesheet"
        />
        <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <script
            dangerouslySetInnerHTML={{
                __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '${GA_ID}');
                        `,
            }}
        />
    </Head>
);
