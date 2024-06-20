import { forwardRef } from 'react';
import clsx from 'clsx';

import { ChevronIcon } from '../icons';

import { usePagination } from './hooks';

import s from './Pagination.module.scss';

export interface PaginationProps extends React.ComponentProps<'nav'> {
  currentPage: number;
  totalPages: number;
  siblingCount?: number;
  sideButtons?: boolean;
  onPageChange?: (page: number) => void;
}

export const Pagination = forwardRef<React.ComponentRef<'nav'>, PaginationProps>(
  (
    { currentPage, totalPages, siblingCount = 1, sideButtons = false, onPageChange, className },
    ref,
  ) => {
    const { pages, nextPage, prevPage } = usePagination({ currentPage, totalPages, siblingCount });

    return (
      <nav
        ref={ref}
        className={clsx(s.wrapper, className)}
      >
        {sideButtons && (
          <button
            type="button"
            aria-label="previous page"
            className={clsx(s['side-button'], s.left)}
            onClick={() => onPageChange?.(prevPage)}
          >
            <ChevronIcon />
          </button>
        )}
        <div className={s.list}>
          {pages.map((page, index) =>
            page ? (
              <button
                key={index}
                type="button"
                className={clsx(s['list-item'], {
                  [s.current]: page === currentPage,
                })}
                onClick={() => onPageChange?.(page)}
              >
                {page}
              </button>
            ) : (
              <div
                key={index}
                className={s['space-item']}
              >
                ...
              </div>
            ),
          )}
        </div>
        {sideButtons && (
          <button
            type="button"
            aria-label="next page"
            className={s['side-button']}
            onClick={() => onPageChange?.(nextPage)}
          >
            <ChevronIcon />
          </button>
        )}
      </nav>
    );
  },
);
