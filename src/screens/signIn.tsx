import { VStack, Image, Text, Center, Heading } from "native-base";

import backgroundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg"
import { Input } from "@components/Input";

export function SignIn() {
    return (
        <VStack flex={1} bg="gray.700">
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
            </Center>

            <Input placeholder="E-mail"/>
            <Input placeholder="Passowrd"/>

        </VStack>
    )
}