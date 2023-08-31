import { Heading, VStack, HStack, Text } from "native-base"

export function HomeHeader() {
    return (
        <HStack>
        <VStack>
                <Text color='gray.100'>
                    Hello,
                </Text>
                
                <Heading color='gray.100'>
                    Davi Duarte
                </Heading>
        </VStack>
        </HStack>
    )
}