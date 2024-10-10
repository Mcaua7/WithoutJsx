import react from "react";
import { View, Text } from "react-native";

export const CollumnWithoutJSX = () => {
    const {createElement} = react;

    return createElement(
        View, {style: {flexDirection: 'row'}},
            createElement(
                View, {style: {padding: 20, backgroundColor: 'white', borderWidth: 1, borderRightColor: 'black'}},
                    createElement(
                        Text, {style: {color: 'black'}}, 'Primeira Coluna sem Jsx'
                    )
            ),
            createElement(
                View, {style: {padding: 20, backgroundColor: 'white', borderWidth: 1, borderRightColor: 'black'}},
                    createElement(
                        Text, {style: {color: 'black'}}, 'Segunda Coluna sem Jsx'
                    )
            )
    );
}
    

