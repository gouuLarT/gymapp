import { Heading, VStack, HStack, Text } from "native-base"

export function HomeHeader() {
    return (
        <HStack 
        bgColor='gray.600'
        pt={16}
        alignItems='center'
        pb={5}
        px={8}
        >
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