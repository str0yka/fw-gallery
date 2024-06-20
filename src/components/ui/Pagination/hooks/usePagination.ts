import { useMemo } from 'react';

interface UsePaginationOptions {
  totalPages: number;
  currentPage: number;
  siblingCount?: number;
}

const range = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
};

export const usePagination = ({
  currentPage,
  totalPages,
  siblingCount = 1,
}: UsePaginationOptions) => {
  const { pages, nextPage, prevPage } = useMemo(() => {
    const firstPage = 1;
    const lastPage = totalPages;
    const nextPage = Math.min(currentPage + 1, lastPage);
    const prevPage = Math.max(currentPage - 1, firstPage);
    const totalPageNumbers = 2 * siblingCount + 5; // 5 = currentPage + 2 spaces + first page + last page

    const leftSiblingPage = Math.max(currentPage - siblingCount, firstPage);
    const rightSiblingPage = Math.min(currentPage + siblingCount, lastPage);

    const shouldShowLeftSpace = leftSiblingPage > firstPage + 2;
    const shouldShowRightSpace = rightSiblingPage < lastPage - 2;

    let pages: (number | null)[];
    if (totalPageNumbers >= totalPages) {
      pages = range(firstPage, lastPage);
    } else if (!shouldShowLeftSpace && !shouldShowRightSpace) {
      pages = range(firstPage, lastPage);
    } else if (!shouldShowLeftSpace && shouldShowRightSpace) {
      pages = [...range(1, totalPageNumbers - 2), null, lastPage];
    } else if (shouldShowLeftSpace && !shouldShowRightSpace) {
      pages = [firstPage, null, ...range(totalPages - (totalPageNumbers - 3), totalPages)];
    } else {
      pages = [firstPage, null, ...range(leftSiblingPage, rightSiblingPage), null, lastPage];
    }

    return { pages, nextPage, prevPage };
  }, [currentPage, totalPages, siblingCount]);

  return { pages, nextPage, prevPage };
};
