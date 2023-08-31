import { Group } from '@components/group'
import { HomeHeader } from '@components/homeHeader'
import { FlatList, HStack, VStack } from 'native-base'
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


        </VStack>
    )
}