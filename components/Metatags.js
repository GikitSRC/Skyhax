// Component for metatags

// Use twitter card validator to test: https://cards-dev.twitter.com/validator

import Head from 'next/head';

export default function Metatags({
  title = 'Skyhax',
  description = 'Skyhax is a organization dedicated to provide you the best scripts and the best methods to get past restrictions.',
  image = '/components/card.png',
}) {
  return (
    <Head>
      
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3407930819317243"
     crossorigin="anonymous"></script>
      <title>{title}</title>
      <meta name="description" content={description}/>
        
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="skyhax.tk" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
    </Head>
  );
}