import { VStack, Image, Text, Center, Heading, ScrollView, HStack } from "native-base";
import { Button } from "@components/button";
import { Input } from "@components/Input";
import { UserPhoto } from "@components/userPhoto";
import { ScreenHeader } from "@components/screenHeader";

export function Profile() {


    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <ScreenHeader title="Profile"/>
            
            
            <VStack flex={1} p={10} bg='gray.900'>
                <Center>
                    <UserPhoto
                        size={40}
                        source={{ uri: 'https://github.com/gouuLarT.png' }}
                        alt="User's image"
                        borderColor="gray.200"
                    />
                </Center>
                <Center marginTop={10}>
                    <Input
                        bg='gray.500'
                    />
                    <Input
                        bg='gray.500'
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