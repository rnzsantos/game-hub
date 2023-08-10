import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import usePlatforms from '../hooks/usePlatforms';
import useGameQueryStore from '../store';

const PlatformSelector = () => {
  const { data } = usePlatforms();
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const setPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const label = data?.results.find((platform) => platform.id === platformId);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {label ? label?.name : 'Select Platform'}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => setPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
