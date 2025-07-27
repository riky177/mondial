'use client';

import { useParams } from 'next/navigation';
import React from 'react';

import Breadcrumbs from '@/components/breadcrumbs';

import { STORIES } from './constant';

const Articles = () => {
  const params = useParams();
  const articleId = params.id as string;
  return (
    <div className="container-lg flex flex-col items-center justify-center px-5 md:px-0">
      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'News & Stories', href: '/stories/all' },
          {
            label:
              STORIES.find((story) => String(story.id) === articleId)?.title ||
              'Article',
            href: '/stories/articles',
            isActive: true,
          },
        ]}
        className="mb-5 mt-10 w-fit"
      />
      <div className="mx-auto h-[500px] w-full max-w-[80%]"></div>
    </div>
  );
};

export default Articles;
