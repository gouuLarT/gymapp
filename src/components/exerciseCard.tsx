import { HStack, Heading, Image, VStack, Text, Icon } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Entypo } from '@expo/vector-icons'
import { ExerciseDTO } from "@dtos/ExerciseDTO";
import { api } from "@services/api";

type Props = TouchableOpacityProps & {
    data: ExerciseDTO;
};

export function ExerciseCard({ data, ...rest }: Props) {
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
                    source={{ uri: `${api.defaults.baseURL}/exercise/thumb/${data.thumb}` }}
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
                        {data.name}
                    </Heading>

                    <Text
                        fontSize="sm"
                        color="gray.200"
                        mt={1}
                        ml={5}
                        numberOfLines={2}>
                        {data.series} series x {data.repetitions} repetitions
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