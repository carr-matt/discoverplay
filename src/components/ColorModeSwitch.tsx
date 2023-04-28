import { useColorMode } from '@chakra-ui/react';
import { MdWbSunny } from 'react-icons/md';
import { IoMoonSharp } from 'react-icons/io5';

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  if (colorMode === 'dark')
    return (
      <MdWbSunny
        color="#9ae6b4"
        cursor='pointer'
        size={45}
        onClick={toggleColorMode}
      />
    );
  return (
    <IoMoonSharp
      color="#9ae6b4"
      cursor='pointer'
      size={45}
      onClick={toggleColorMode}
    />
  );
};

export default ColorModeSwitch;
