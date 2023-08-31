import { Pressable, Text } from "native-base";
import { useHover } from "native-base/lib/typescript/components/primitives";

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
        _pressed={{
            borderColor: 'green.500',
            borderWidth: 1,
        }}
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