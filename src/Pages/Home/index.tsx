import Reac, {useState} from 'react';
import { View, Text, Keyboard, TouchableWithoutFeedback, FlatList } from 'react-native';
import {
	Container, AreaSafe,
	SearchText, InputArea,
	TitleSections
} from './styles';
import Feather from '@expo/vector-icons/Feather';

import Header from '../../Components/Header';
import HorizontalNews from '../../Components/HorizontalNews';
import HorizontalCloseto from '../../Components/HorizontalCloseTo';

import { useNavigation } from '@react-navigation/native';

export default function Home() {

	const navigation = useNavigation();

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
	
	function handleSubmitNews(item:any){
		navigation.navigate("Details", {
			title: item.title,
			linkImage: item.linkImage,
			price: item.price,
			description: item.description,

		})
	}

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
					<TitleSections>Novidades</TitleSections>
					<FlatList
						keyExtractor={(item) => item.id.toString()}
						data={newsList}
						renderItem={({item}) => <HorizontalNews data={item} submit={() => handleSubmitNews(item)}/>}
						horizontal
						showsHorizontalScrollIndicator={false}
					/>
					<TitleSections>Próximos de você</TitleSections>
					<FlatList
						keyExtractor={(item) => item.id.toString()}
						data={newsList}
						renderItem={({item}) => <HorizontalCloseto data={item} />}
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