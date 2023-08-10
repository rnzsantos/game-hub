import { SimpleGrid, Spinner } from '@chakra-ui/react';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameSkeleton from './GameSkeleton';

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  // const skeletons = [1, 2, 3, 4, 5, 6];
  const skeletons = Array.from({ length: 20 }, (_, index) => index + 1);

  const allFetchedGames =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

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
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameSkeleton />
            </GameCardContainer>
          ))}

        {data?.pages.map((page, index) => (
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
