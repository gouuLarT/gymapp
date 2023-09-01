import { ExerciseCard } from '@components/exerciseCard'
import { Group } from '@components/group'
import { HomeHeader } from '@components/homeHeader'
import { FlatList, HStack, Heading, VStack, Text } from 'native-base'
import { useState } from 'react'

export function Home() {
    const [groupSelected, setGroupSelected] = useState('costas')
    const [groups, setGroups] = useState(['costas', 'ombro', 'biceps', 'triceps'])
    return (
        <VStack flex={1}>
            <HomeHeader />

            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Group
                        name={item}
                        isActive={groupSelected === item}
                        onPress={() => setGroupSelected(item)}

                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                _contentContainerStyle={{
                    px: 8
                }}
                maxH={10}
                my={10}
            />

            <VStack px={8} >
            <HStack justifyContent="space-between" mb={5}>
                <Heading color="gray.200" fontSize="md">
                    Exercises
                </Heading>

                <Text color="gray.200" fontSize="sm">
                    4
                </Text>
            </HStack>
            <ExerciseCard />

            </VStack>
        </VStack>
    )
}