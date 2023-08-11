import { ChevronDownIcon } from '@chakra-ui/icons';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import useGameQueryStore from '../store';

const SortSelector = () => {
  const menuItems = [
    { value: '', label: 'Relevance' },
    { value: 'name', label: 'Name' },
    { value: '-added', label: 'Date Added' },
    { value: '-released', label: 'Release Date' },
    { value: '-metacritic', label: 'Metacritic Score' },
  ];

  const setOrder = useGameQueryStore((s) => s.setOrder);
  const order = useGameQueryStore((s) => s.gameQuery.order);
  const selectedOrder = menuItems.find((item) => item.value === order);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Order by: {selectedOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {menuItems?.map((item) => (
          <MenuItem key={item.value} onClick={() => setOrder(item.value)}>
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
