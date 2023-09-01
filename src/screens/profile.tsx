import { VStack, Image, Text, Center, Heading, ScrollView, HStack } from "native-base";
import { Button } from "@components/button";
import { Input } from "@components/Input";
import { UserPhoto } from "@components/userPhoto";
import { ScreenHeader } from "@components/screenHeader";
import { TouchableOpacity } from "react-native";

export function Profile() {


    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <ScreenHeader title="Profile" />

            <VStack flex={1} p={6} bg='gray.900'>
                <Center>
                    <UserPhoto
                        size={33}
                        source={{ uri: 'https://github.com/gouuLarT.png' }}
                        alt="User's image"
                        borderColor="gray.200"
                        mb={2}
                    />
                    <TouchableOpacity>
                        <Text color="green.500" fontWeight="bold" fontSize="md">
                            Change picture
                        </Text>
                    </TouchableOpacity>
                </Center>
                <Center marginTop={15}>
                    <Input
                        bg='gray.500'
                        placeholder="E-mail"
                    />
                    <Input
                        bg='gray.500'
                        placeholder="Passowrd"
                    />
                </Center>
                <Heading
                    color="gray.100"
                    fontSize="xl"
                    mb={6}
                    fontFamily="heading">
                    Change password
                </Heading>
                <Center>
                    <Input
                        placeholder="Old password"
                        secureTextEntry
                        bg='gray.500'
                    />
                    <Input
                        placeholder="New password"
                        secureTextEntry
                        bg='gray.500'
                    />
                </Center>

                <Button
                    title="Update"
                />

            </VStack>
        </ScrollView>
    )
}