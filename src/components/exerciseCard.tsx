import { HStack, Heading, Image, VStack, Text, Icon } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from '@expo/vector-icons'

type Props = TouchableOpacityProps & {

};

export function ExerciseCard({ ...rest }: Props) {
    return (
        <TouchableOpacity {...rest}>
            <HStack
                bg="gray.500"
                alignItems="center"
                p={2}
                pr={4}
                rounded="md"
                mb={3}
                >
                <Image
                    source={{ uri: "https://www.origym.com.br/banners/remada-unilateral-3.jpg" }}
                    alt="Exercise Image"
                    w={16}
                    h={16}
                    rounded="md"
                    resizeMode="center"

                />

                <VStack flex={1}> 
                    <Heading
                        fontSize="lg"
                        color="white"
                        ml={5}>
                        Single-arm row
                    </Heading>

                    <Text
                        fontSize="sm"
                        color="gray.200"
                        mt={1}
                        ml={5}
                        numberOfLines={2}>
                        3 sets of 12 rep
                    </Text>
                </VStack>

                <Icon 
                as={Entypo} 
                name="chevron-thin-right"
                color="gray.300"
                />
            </HStack>
        </TouchableOpacity>
    );
}