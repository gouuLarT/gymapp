import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'
import backgroundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg"
import { Input } from "@components/Input";
import { Button } from "@components/button";
import { useNavigation } from "@react-navigation/native";

export function SignIn() {

    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    function handleNewAccount(){
        navigation.navigate("signUp")
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1}} showsVerticalScrollIndicator={false}>
        <VStack flex={1} px={10}>
            <Image
                source={backgroundImg}
                defaultSource={backgroundImg}
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
                    placeholder="E-mail"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <Input
                    placeholder="Passowrd"
                    secureTextEntry
                />

                <Button title="Access" />
            </Center>

            <Center marginTop={24}>

                <Text 
                color='gray.100' 
                fontSize="sm" 
                marginBottom={3} 
                fontFamily="body">
                    Still don't have access?
                </Text>

                <Button 
                title="Register" 
                variant='outline' 
                onPress={handleNewAccount}
                />

            </Center>

        </VStack>
        </ScrollView>
    )
}