import Head from "next/head";
 const HeadSection = ({headData}) => {
  
    const { description, keywords, title, authorName, isbn, city} = headData
  
    return (
    <Head>
      {/* <!-- Google / Search Engine Tags --> */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        //href="%PUBLIC_URL%/apple-touch-icon.png"
        href="/favicon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon.png"
      />
      <link rel="canonical" href="%PUBLIC_URL%" />
      <meta
        name="keywords"
        content={keywords}
      />
      <meta name="robots" content="index, follow" />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://www.cheapbookdeals.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Cheapbookdeals" />
      <meta property="og:description" content="Cheapbookdeals:Buy and Sell Books Directly." />
      <meta property="og:image" content="/favicon.png" />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="cheapbookdeals" />
      <meta name="twitter:description" content="Cheapbookdeals:Buy and Sell Books Directly." />
      <meta name="twitter:image" content="/favicon.png" />

      <title>{title} | ISBN:{isbn} | By-{authorName}</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="keyword"
        content={
          title +
          ", isbn: " +
          isbn +
          ", " +
          authorName +
          ",buy textbook near " +
          city +
          ", trade in book " +
          title
        }
      />
      <meta name="description" content={description} />
      <meta name="author" content={authorName} />
    </Head>
  );
};



export default HeadSection
