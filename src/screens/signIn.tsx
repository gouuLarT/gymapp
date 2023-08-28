import { VStack, Image } from "native-base";

import backgroundImg from "@assets/background.png";

export function SignIn(){
    return(
        <VStack flex={1} bg="gray.700">
            <Image 
            source={backgroundImg}
            alt="people training"
            position="absolute"
            resizeMode="contain"
            />
       
        </VStack>
    )
}