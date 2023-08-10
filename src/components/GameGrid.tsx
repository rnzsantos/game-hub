import { SimpleGrid, Spinner } from '@chakra-ui/react';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();

  const allFetchedGames =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <InfiniteScroll
      dataLength={allFetchedGames}
      next={() => fetchNextPage()}
      hasMore={!!hasNextPage}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ base: 1, md: 3, xl: 4 }}
        spacing={{ base: 5, lg: 7 }}
      >
        {data.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
