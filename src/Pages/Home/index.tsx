import Reac, {useState} from 'react';
import { View, Text, Keyboard, TouchableWithoutFeedback, FlatList } from 'react-native';
import {
	Container, AreaSafe,
	SearchText, InputArea,
	TextNews,FlatNews
} from './styles';
import Feather from '@expo/vector-icons/Feather';

import Header from '../../Components/Header';
import HorizontalNews from '../../Components/HorizontalNews';


export default function Home() {
	const [newsList, setNewsList] = useState([
			{id: 1, title: 'Casa de Praia', price: 1.100, linkImage: 'https://www.decorfacil.com/wp-content/uploads/2017/10/20171015casas-de-praia-2.jpg' },
			{id: 2, title: 'Casa de Praia', price: 1.100, linkImage: 'https://www.decorfacil.com/wp-content/uploads/2017/10/20171015casas-de-praia-2.jpg' },
			{id: 3, title: 'Casa de Praia', price: 1.100, linkImage: 'https://www.decorfacil.com/wp-content/uploads/2017/10/20171015casas-de-praia-2.jpg' },
	])
	

	return (
		<Container>
			<Header title={'Alugue'} />
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<AreaSafe>
					<InputArea>
						<Feather name='search' size={32} />
						<SearchText
							placeholder='O que está procurando?'
						/>
					</InputArea>
					<TextNews>Novidades</TextNews>
					<FlatList
						keyExtractor={(item, index) => item.id}
						data={newsList}
						renderItem={({item}) => <HorizontalNews data={item}/>}
					/>


					<Text>Teste</Text>
					<Text>Teste</Text>
					<Text>Teste</Text>
					<Text>Teste</Text>
					<Text>Teste</Text>
					<Text>Teste</Text>
					<Text>Teste</Text>
					<Text>Teste</Text>
					<Text>Teste</Text>
					<Text>Teste</Text>
				</AreaSafe>
			</TouchableWithoutFeedback>
		</Container>
	)
}