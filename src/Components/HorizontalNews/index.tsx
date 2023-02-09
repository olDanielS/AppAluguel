import {View, Text} from 'react-native';

interface DataFlat{
    key: Number,
    title: String,
    price: Number,
    linkImage: String
}

export default function HorizontalNews(data:DataFlat){
    return(
        <View>
            <Text>item</Text>
        </View>
    )
}