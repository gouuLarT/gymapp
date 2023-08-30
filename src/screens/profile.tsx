import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";
import { Button } from "@components/button";
import { Input } from "@components/Input";
    
export function Profile(){


    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1}} showsVerticalScrollIndicator={false}>
            <VStack flex={1} p={10} bg='gray.900'>
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