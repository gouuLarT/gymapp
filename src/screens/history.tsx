import { HistoryCard } from '@components/historyCard'
import { ScreenHeader } from '@components/screenHeader'
import { Heading, SectionList, VStack, Text } from 'native-base'
import { useState } from 'react'

export function History() {
    const [exercises, setExercises] = useState([
        {
            title: '01.09.23',
            data: ["Front Pull Down", "Single-arm Row" ]
        },
        {
            title: '05.10.23',
            data: ["Front Pull Down"]
        }
    ]);

    return (
        <VStack flex={1}>
            <ScreenHeader title='History' />

            <SectionList
                sections={exercises}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <HistoryCard />
                )}
                renderSectionHeader={({ section }) => (
                    <Heading color="gray.200" fontSize="md" mb="3" mt={10}>
                        {section.title}
                    </Heading>
                )}
                px={8}
                contentContainerStyle={exercises.length === 0 && { flex: 1, justifyContent: 'center'}}
                ListEmptyComponent={() => (
                    <Text color="gray.100" textAlign="center">
                        Shall we train today?
                    </Text>
                )}
            />
        </VStack>
    );
}