import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

const SortSelector = () => {
  const menuItems = [
    { label: 'Name', value: 'name' },
    { label: 'Released Date', value: '-released' },
    { label: 'Date Added', value: '-added' },
    { label: 'Rating', value: '-rating' },
    { label: 'Metacritic', value: '-metacritic' },
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Select Order
      </MenuButton>
      <MenuList>
        {menuItems?.map((item) => (
          <MenuItem
            key={item.value}
            // onClick={() => setPlatformId(platform.id)}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
