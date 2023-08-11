import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = isExpanded ? children : children.substring(0, limit) + '...';

  return (
    <Text>
      {summary}
      <Button
        size="xs"
        colorScheme="yellow"
        onClick={() => setIsExpanded(!isExpanded)}
        ms={1}
      >
        {isExpanded ? 'See less' : 'Read more'}
      </Button>
    </Text>
  );
};

export default ExpandableText;
