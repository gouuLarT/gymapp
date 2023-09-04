import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import backgroundImg from "@assets/background.png";
import LogoSvg from "@assets/logo.svg"
import { Input } from "@components/Input";
import { Button } from "@components/button";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from 'react-hook-form'

export function SignUp() {
    const navigation = useNavigation();
    const { control } = useForm();

    function handleGoBack() {
        navigation.goBack()
    }

    function handleSignUp() {
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <VStack flex={1} px={10}>

                <Image
                    source={backgroundImg}
                    defaultSource={backgroundImg}
                    alt="people training"
                    position="absolute"
                    resizeMode="contain"
                />

                <Center
                    my={24}>
                    <LogoSvg />

                    <Text
                        color={"gray.100"}
                        fontSize="sm">
                        Trainee your mind and body
                    </Text>
                </Center>

                <Center>
                    <Heading
                        color="gray.100"
                        fontSize="xl"
                        mb={10}
                        fontFamily="heading">

                        Access your account
                    </Heading>

                    <Controller
                        control={control}
                        name="name"
                        render={({
                            field: { onChange, value } }) => (
                            <Input
                                placeholder="Name"
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="email"
                        render={({
                            field: { onChange, value } }) => (
                            <Input
                                placeholder="E-mail"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="email"
                        render={({
                            field: { onChange, value } }) => (
                            <Input
                                placeholder="Password"
                                secureTextEntry
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="email"
                        render={({
                            field: { onChange, value } }) => (
                            <Input
                                placeholder="Confirm the password"
                                secureTextEntry
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                    />

                    <Button
                        title="Register and access"
                        onPress={handleSignUp}
                    />

                </Center>

                <Button
                    title="Back to login"
                    variant='outline'
                    mt={10}
                    onPress={handleGoBack}
                />
            </VStack>
        </ScrollView>
    )
}