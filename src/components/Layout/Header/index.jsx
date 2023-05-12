import React from 'react';
import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import heroImage from '@assets/images/hero.jpg';
import { COLORS } from '../../../constants/colors';

const Header = () => {
  return (
    <Flex
      w={'full'}
      h={'40vh'}
      backgroundImage={`url(${heroImage})`}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
      >
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            align={'center'}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
          >
            시작해요, 비건생활
            <br /> 비긴비건.
          </Text>
          <Stack direction={'row'}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon boxSize={6} color="gray.300" />}
              />
              <Input
                size="lg"
                borderRadius="3xl"
                bg="white"
                type="tel"
                placeholder="지역, 식당 또는 음식"
              />
              <InputRightElement width="4.5rem">
                <Button colorScheme="#000000" h="1.75rem" size="sm">
                  검색
                </Button>
              </InputRightElement>
            </InputGroup>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Header;
