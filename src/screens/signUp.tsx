import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import backgroundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg"
import { Input } from "@components/Input";
import { Button } from "@components/button";

export function SignUp() {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <VStack flex={1} px={10}>

                <Image
                    source={backgroundImg}
                    alt="people training"
                    position="absolute"
                    resizeMode="contain"
                />

                <Center my={24}>
                    <LogoSvg />

                    <Text color={"gray.100"} fontSize="sm">
                        Trainee your mind and body
                    </Text>
                </Center>

                <Center>
                    <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
                        Access your account
                    </Heading>

                    <Input
                        placeholder="Name"
                    />

                    <Input
                        placeholder="E-mail"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <Input
                        placeholder="Passowrd"
                        secureTextEntry
                    />

                    <Button title="Register and access" />
                </Center>

                <Button
                    title="Back to login"
                    variant='outline'
                    mt={24}
                />
            </VStack>
        </ScrollView>
    )
}