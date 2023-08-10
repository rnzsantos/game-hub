import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { AiFillAndroid, AiOutlineGlobal } from 'react-icons/ai';
import { BsApple, BsPlaystation, BsWindows, BsXbox } from 'react-icons/bs';
import { FaLinux } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import Platform from '../entities/Platform';

interface Props {
  platforms: Platform[];
}

const GamePlatformIcons = ({ platforms = [] }: Props) => {
  const platformIconsMap: { [key: string]: IconType } = {
    playstation: BsPlaystation,
    xbox: BsXbox,
    pc: BsWindows,
    linux: FaLinux,
    mac: BsApple,
    android: AiFillAndroid,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: AiOutlineGlobal,
  };

  return (
    <HStack>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={platformIconsMap[platform.slug]}
          color="gray.400"
        />
      ))}
    </HStack>
  );
};

export default GamePlatformIcons;
