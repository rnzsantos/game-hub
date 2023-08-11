import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import { GridItem, Heading, SimpleGrid } from '@chakra-ui/react';
import ExpandableText from '../components/ExpandableText';

const GameDetailPage = () => {
  const params = useParams();
  const { data: game } = useGame(params.slug!);

  return (
    <SimpleGrid columns={2}>
      <GridItem>
        <Heading>{game?.name}</Heading>
        <ExpandableText>{game?.description_raw!}</ExpandableText>
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
