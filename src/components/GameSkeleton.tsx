import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';

const GameSkeleton = () => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Skeleton width="xl" height="220px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameSkeleton;
