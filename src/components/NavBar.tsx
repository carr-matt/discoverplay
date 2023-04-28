import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.svg';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image
        src={logo}
        boxSize="45px"
        borderRadius={10}
        border="2px"
        alt="DiscoverPlay"
      />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
