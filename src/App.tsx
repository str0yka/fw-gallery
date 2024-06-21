import { useEffect, useMemo, useState } from 'react';

import { Container, Filter, Header, Search } from '~/components';
import { Card, IconButton, Pagination, Typography } from '~/components/ui';
import { FilterIcon } from '~/components/ui/icons';
import type { GetPaintingsParams } from '~/utils/api';
import { useGetPaintingsQuery } from '~/utils/api';
import { useDebounceCallback } from '~/utils/hooks';

import s from './App.module.scss';

const LIMIT = 6;

export const App = () => {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filterOptions, setFilterOptions] = useState<
    Pick<GetPaintingsParams, 'authorId' | 'locationId' | 'yearsFrom' | 'yearsTo'>
  >({});

  const debouncedOnQueryChange = useDebounceCallback((query: string) => {
    setCurrentPage(1);
    setQuery(query);
  }, 500);

  const getPaintingsQuery = useGetPaintingsQuery({
    params: {
      query,
      limit: LIMIT,
      page: currentPage,
      authorId: filterOptions.authorId,
      locationId: filterOptions.locationId,
      yearsFrom: filterOptions.yearsFrom,
      yearsTo: filterOptions.yearsTo,
    },
  });

  const isPaintingsEmpty = getPaintingsQuery.data?.data.length === 0;

  const totalCountOfPaintings = Number(getPaintingsQuery.data?.headers['x-total-count']) || 0;

  const totalPages = useMemo(
    () => Math.ceil(totalCountOfPaintings / LIMIT),
    [totalCountOfPaintings],
  );

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [currentPage]);

  return (
    <>
      <Filter
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        onSubmit={(values) => {
          setCurrentPage(1);
          setFilterOptions(values);
        }}
      />
      <Header />
      <main className={s['main-container']}>
        <Container className={s.grid}>
          <div className={s['search-wrapper']}>
            <div className={s['search-container']}>
              <Search
                placeholder="Search by painting title"
                onQueryChange={debouncedOnQueryChange}
              />
            </div>
            <IconButton onClick={() => setFilterOpen((prevFilterOpen) => !prevFilterOpen)}>
              <FilterIcon className={s['filter-icon']} />
            </IconButton>
          </div>
        </Container>
        {!isPaintingsEmpty && (
          <Container className={s.grid}>
            {getPaintingsQuery.data?.data.map((painting) => (
              <Card
                key={painting.id}
                artist={painting.author.name}
                date={painting.created}
                imageUrl={`${import.meta.env.VITE_API_URL}${painting.imageUrl}`}
                location={painting.location.location}
                name={painting.name}
              />
            ))}
          </Container>
        )}
        {isPaintingsEmpty && (
          <Container className={s['empty-container']}>
            <Typography
              variant="paragraph-big-light"
              color="secondary"
            >
              No matches for{' '}
              <Typography
                variant="paragraph-big-medium"
                component="span"
                color="secondary"
              >
                {query}
              </Typography>
            </Typography>
            <Typography
              variant="paragraph-small-light"
              color="secondary-gray"
            >
              Please try again with a different spelling or keywords.
            </Typography>
          </Container>
        )}
        {!!totalPages && (
          <Pagination
            className={s.pagination}
            currentPage={currentPage}
            totalPages={totalPages}
            sideButtons
            onPageChange={setCurrentPage}
          />
        )}
      </main>
    </>
  );
};
