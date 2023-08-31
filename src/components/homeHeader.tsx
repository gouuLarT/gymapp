import { Heading, VStack, HStack, Text } from "native-base"
import { UserPhoto } from "./userPhoto"

export function HomeHeader() {
    return (
        <HStack 
        bgColor='gray.600'
        pt={16}
        alignItems='center'
        pb={5}
        px={8}
        >
            <UserPhoto 
            size={16}
            source={{ uri: 'https://github.com/gouuLarT.png'}}
            alt="User's image"
            mr={4}
            />
        <VStack>
                <Text color='gray.100' fontSize="md">
                    Hello,
                </Text>
                
                <Heading color='gray.100' fontSize="md">
                    Davi Duarte
                </Heading>
        </VStack>
        </HStack>
    )
}