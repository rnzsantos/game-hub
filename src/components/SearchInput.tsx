import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement color="gray.500">
        <BsSearch />
      </InputLeftElement>
      <Input variant="filled" rounded="2xl" />
    </InputGroup>
  );
};

export default SearchInput;
