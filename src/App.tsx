import { useEffect, useState } from 'react';

import { Container, Header, Search } from '~/components';
import { Card, IconButton, Pagination } from '~/components/ui';
import { FilterIcon } from '~/components/ui/icons';
import { useGetPaintingsQuery } from '~/utils/api';

import s from './App.module.scss';

const LIMIT = 6;

export const App = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const getPaintingsQuery = useGetPaintingsQuery({ params: { limit: LIMIT, page } });

  const totalCountOfPaintings = Number(getPaintingsQuery.data?.headers['x-total-count']) || null;

  useEffect(() => {
    if (totalCountOfPaintings !== null) {
      setTotalPages(Math.ceil(Number(totalCountOfPaintings) / LIMIT));
    }
  }, [totalCountOfPaintings]);

  return (
    <>
      <Header />
      <main className={s['main-container']}>
        <Container className={s.grid}>
          <div className={s['search-wrapper']}>
            <div className={s['search-container']}>
              <Search placeholder="Search by painting title" />
            </div>
            <IconButton>
              <FilterIcon className={s['filter-icon']} />
            </IconButton>
          </div>
        </Container>
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
        <Pagination
          className={s.pagination}
          currentPage={page}
          totalPages={totalPages}
          sideButtons
          onPageChange={setPage}
        />
      </main>
    </>
  );
};
