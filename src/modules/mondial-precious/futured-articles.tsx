import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FUTURED_ARTICLES_DATA = [
  {
    url: '/stories/articles/makna-simbolis-berlian-dan-precious-stones-pada-ci',
    image:
      'https://mondialjeweler.com/static/website/img/anniversary/article-1.jpg',
    title: 'Makna Simbolis Berlian dan Precious Stones pada Cincin Tunangan',
  },
  {
    url: '/stories/articles/5-keutamaan-memakai-cincin-pria-di-berbagai-momen',
    image:
      'https://mondialjeweler.com/static/website/img/anniversary/article-2.jpg',
    title: '5 Keutamaan Memakai Cincin Pria di Berbagai Momen',
  },
  {
    url: '/stories/articles/transformable-tassel-brooch-mewah-karya-mondial-x-',
    image:
      'https://mondialjeweler.com/static/website/img/anniversary/article-3.jpg',
    title:
      'Transformable Tassel Brooch Mewah Karya MONDIAL x Nicholas Saputra yang Lagi Trend di 2024',
  },
];

const FuturedArticles = () => {
  return (
    <div className="container w-full">
      <h2 className="mb-[30px] text-center font-trajan-bold text-[32px] uppercase md:mb-[50px] md:text-[40px]">
        Futured Articles
      </h2>
      <div className="flex w-full flex-col justify-center gap-5 md:flex-row">
        {FUTURED_ARTICLES_DATA.map((article, index) => (
          <Link
            href={article.url}
            key={index}
            className={`w-full md:max-w-[${90 / FUTURED_ARTICLES_DATA.length}%] mx-auto flex max-w-[400px] flex-col items-center`}
          >
            <Image
              src={article.image}
              alt={article.title}
              width={400}
              height={400}
              style={{ width: '100%', height: 'auto', maxWidth: '400px' }}
            />
            <h3 className="items-top mt-2.5 text-center text-lg text-white md:mt-5 md:text-[22px]">
              {article.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FuturedArticles;
