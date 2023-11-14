import { View, Text, Button } from "react-native";
import { globalStyles } from '../themes/global';

export default function TicketScreen({ route, navigation }) {

    const pressHandler = () => {
        navigation.navigate('Home Screen')
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.mainTitle}>Ticket</Text>

            <View style={globalStyles.payList}>

                <Text >{route.params.title}</Text>
                <Text >{route.params.genre}</Text>
                <Text >{route.params.details}</Text>
                <Text >{route.params.time}</Text>
                <Text >{route.params.date}</Text>
                <Text >{route.params.seat}</Text>

            </View>

            <Button
                title='Go home'
                onPress={pressHandler}

            />
        </View>
    )
}



