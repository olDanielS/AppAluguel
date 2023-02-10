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
			{id: 1, title: 'Casa de Praia', price: '1.100,00',
			 linkImage: 'https://www.decorfacil.com/wp-content/uploads/2017/10/20171015casas-de-praia-2.jpg',
			description: 'Casa nova, piscina, garagem de frente para o mar'
			},
			{id: 2, title: 'Casa na cidade', price: '1.100,00',
			 linkImage: 'https://fotos.vivadecora.com.br/decoracao-casas-modernas-estrutura-de-madeira-escura-e-escada-cinza-claro-revistavd-202054-proportional-height_cover_medium.jpg',
			description: 'Casa nova, piscina, garagem de frente para o mar'
			},
			{id: 3, title: 'Casa de Condominio', price: '1.120,00',
			 linkImage: 'https://fotos.vivadecora.com.br/decoracao-casas-modernas-portao-metalico-escuro-e-portas-de-vidro-comum-revistavd-201660-proportional-height_cover_medium.jpg',
			description: 'Casa nova, piscina, garagem de frente para o mar'
			},
			
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
						keyExtractor={(item) => item.id.toString()}
						data={newsList}
						renderItem={({item}) => <HorizontalNews data={item}/>}
						horizontal
						showsHorizontalScrollIndicator={false}
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