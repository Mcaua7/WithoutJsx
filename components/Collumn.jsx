import { Text, View } from "react-native";

export const CollumnJsx = () => {

    return(
        <View style={{flexDirection: 'row'}}>
            <View style={{padding: 20, backgroundColor: 'black', borderWidth: 1, borderRightColor: 'white' }}>
                <Text style={{color: 'white'}}>Primeira coluna</Text>
            </View>
                
            <View style={{padding: 20, backgroundColor: 'black', borderWidth: 1, borderWidth: 1, borderRightColor: 'white' }}>
                <Text style={{color: 'white'}}>Segunda coluna</Text>
            </View>
        </View>
    )
}