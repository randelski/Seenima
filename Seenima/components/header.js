import React from "react";
import { View, Text } from 'react-native';

import { globalStyles } from "../themes/global";


export default function Header ({headerTitle}){
    return(
        <View style = {globalStyles.header} >
            <Text style = {globalStyles.titletext }>{headerTitle}</Text>
        </View>
    );
}