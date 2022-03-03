import React from 'react';
import NextHead from 'next/head';
import { useRouter } from 'next/router';

interface HeadProps {
    title?:string;
    description?: string;
    image?: string;
}
 

const Head: React.FC<HeadProps> = (props) => {
  const {
      title= "anime",
      description = "Website xem anime hoàn toàn miễn phí, không quảng cáo.",
      image = "https://i.ibb.co/JnDDN9j/localhost-3000-2.png",
  } = props;

  const { asPath } = useRouter();

  return (
      <NextHead>
          <title>{title}</title>
          <link rel="manifest" href="/manifest.json" />

          <meta name="title" content={title} />
          <meta name="description" content={description } />

          <meta property='og:type' content="website" />
          
          
      </NextHead>
  )
}

export default Head;