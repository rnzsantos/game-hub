import { SimpleGrid, Spinner } from '@chakra-ui/react';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';

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
        columns={{ base: 1, md: 2, xl: 3, '2xl': 4 }}
        spacing={{ base: 5, lg: 7 }}
        padding={2}
      >
        {data.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
