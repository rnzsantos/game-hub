import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';
import useGameQueryStore from '../store';
import { useRef } from 'react';

const SearchInput = () => {
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement color="gray.500">
          <BsSearch />
        </InputLeftElement>
        <Input variant="filled" rounded="2xl" ref={ref} />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
