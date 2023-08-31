import { Group } from '@components/group'
import { HomeHeader } from '@components/homeHeader'
import { Center, HStack, VStack } from 'native-base'

export function Home(){
    return(
        <VStack flex={1}>
            <HomeHeader />

            <HStack>
            <Group name='costas'/>
            <Group name='ombro'/>
            </HStack>

        </VStack>
    )
}