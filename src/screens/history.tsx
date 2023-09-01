import { HistoryCard } from '@components/historyCard'
import { ScreenHeader } from '@components/screenHeader'
import { Heading, SectionList, VStack } from 'native-base'
import { useState } from 'react'

export function History() {
    const [exercises, setExercises] = useState([
        {
            title: '01.09.2023',
            data: ["Single arm-row", "Front pull down"]
        },
        {
            title: '05.10.2023',
            data: ["Front pull down"]
        }
    ])


    return (
        <VStack>
            <ScreenHeader title='History' />

            <SectionList
                sections={exercises}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <HistoryCard />
                )}
                renderSectionHeader={({ section }) => (
                    <Heading color="gray.200" fontSize="md" mb="3" mt={3}>
                        {section.title}
                    </Heading>
                )}
                px={8}
            />

        </VStack>
    )
}