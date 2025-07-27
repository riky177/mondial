'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import { STORIES, Story } from './constant';

interface StoryCardProps {
  story: Story;
}
const StoryCard: React.FC<StoryCardProps> = ({ story }) => (
  <Link
    href={`/stories/articles/${story.id}`}
    className="story-card w-full md:w-[45%]"
  >
    <div className="relative">
      <Image
        src={story.image}
        alt={story.title}
        width={600}
        height={400}
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
    <p className="mb-2 mt-5 font-trajan-bold text-xs text-primary md:text-lg">
      {story.date}
    </p>
    <p className="elipsis-two-lines font-trajan-bold md:text-[22px]">
      {story.title}
    </p>
  </Link>
);

// Configuration constants
const ITEMS_PER_PAGE = 4;
const MAX_PAGINATION_BUTTONS = 7;

/**
 * Sample stories data - In production, this would come from an API or CMS
 */

/**
 * Stories component - Displays paginated list of jewelry stories
 * Features pagination with numbered buttons and story cards
 */
const Stories = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(STORIES.length / ITEMS_PER_PAGE);

  const paginatedStories = STORIES.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  /**
   * Renders pagination buttons with ellipsis for large page counts
   * Shows up to MAX_PAGINATION_BUTTONS buttons with current page centered
   */
  const renderPaginationButtons = () => {
    const halfMax = Math.floor(MAX_PAGINATION_BUTTONS / 2);
    let startPage = Math.max(1, page - halfMax);
    const endPage = Math.min(
      totalPages,
      startPage + MAX_PAGINATION_BUTTONS - 1,
    );

    // Adjust start page if we're near the end
    if (endPage - startPage + 1 < MAX_PAGINATION_BUTTONS) {
      startPage = Math.max(1, endPage - MAX_PAGINATION_BUTTONS + 1);
    }

    const buttons = [];

    // Generate page number buttons
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => setPage(i)}
          className={`rounded border px-3 py-1 font-red-hat font-light ${
            page === i ? 'border-gray-200 text-primary' : 'hover:bg-gray-100'
          }`}
        >
          {i}
        </button>,
      );
    }

    return buttons;
  };

  return (
    <div className="container-lg flex flex-col flex-wrap justify-center gap-10 px-5 pb-10 pt-10 md:flex-row md:justify-between md:px-0">
      {paginatedStories.map((story: Story) => (
        <StoryCard key={story.id} story={story} />
      ))}
      <div className="flex w-full justify-center gap-2">
        {renderPaginationButtons()}
      </div>
    </div>
  );
};

export default Stories;
