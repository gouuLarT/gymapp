import { Pressable, Text } from "native-base";

type Props = {
    name: string;
}

export function Group({name}: Props){
    return(
        <Pressable 
        bg="gray.600"
        mr={3}
        w={24}
        h={10}
        rounded="md"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        >
        <Text 
        color="gray.200"
        textTransform="uppercase"
        fontSize="xs"
        fontWeight="bold"
        >
            {name}
        </Text>
        </Pressable>
    );
}