import { HistoryCard } from '@components/historyCard'
import { ScreenHeader } from '@components/screenHeader'
import { VStack } from 'native-base'

export function History(){
    return(
            <VStack>
                <ScreenHeader title='History' />
                
                <HistoryCard />
            </VStack>
    )
}