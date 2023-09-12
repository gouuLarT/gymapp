import { Heading, VStack, HStack, Text } from "native-base"
import { UserPhoto } from "./userPhoto"

import { MaterialIcons } from '@expo/vector-icons'
import { Icon } from "native-base"
import { TouchableOpacity } from "react-native"
import { useAuth } from "@hooks/useAuth"

import defaultUserPhotoImg from '@assets/userPhotoDefault.png'

export function HomeHeader() {
    const { user, signOut } = useAuth()

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
            source={user.avatar ? { uri: user.avatar} : defaultUserPhotoImg}
            alt="User's image"
            mr={4}
            />
        <VStack flex={1}>
                <Text color='gray.100' fontSize="md">
                    Hello,
                </Text>
                
                <Heading color='gray.100' fontSize="md">
                    {user.name}
                </Heading>
        </VStack>

        <TouchableOpacity onPress={signOut}>
        <Icon 
            as={MaterialIcons}
            name="logout"
            color='gray.200'
            size={7}            
        />
        </TouchableOpacity>
        </HStack>
    )
}