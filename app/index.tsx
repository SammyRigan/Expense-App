import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import Carousel from 'react-native-reanimated-carousel';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#111'
    },
    headerButton: {
        flexDirection: "row",
        alignItems: "center",
        width: "auto",
        padding: 5,
        shadowColor: '#ffffff', // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        // backgroundColor: '#fff',
        elevation: 2, // Android
    },
    buttonText: {
        fontSize: 12, 
        color: "#fff",
        fontFamily: "PoppinsRegular",
        marginHorizontal: 5
    },
    banner: {
        margin: 10,
        backgroundColor: '#CAF99C',
        borderRadius: 20,
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        shadowColor: "#d9efc2",
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity:  0.20,
        shadowRadius: 5.62,
        elevation: 8
    },
    title: {
        fontFamily: 'PoppinsRegular',
        fontSize: 15,
        lineHeight: 16,
        opacity: .6
    },
    amount: {
        fontSize: 30,
        lineHeight: 38,
        fontFamily: 'PoppinsSemiBold'
    },
    icon: {
        width: 50,
        height: 50,
        backgroundColor: "#111",
        borderRadius: 50,
        flexDirection: "row",
    },
    month: {
        paddingVertical: 5,
        // paddingHorizontal: 20,
        color: "#fff",
        fontFamily: "PoppinsRegular",
        fontSize: 15,
        // margin: "auto",
        opacity: .5
        // textTransform: "uppercase"
    }
})

const Index = () => {

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];

    
    const width = Dimensions.get('window').width;

    const baseOptions = {
      vertical: false,
    //   width: 100,
      style: {
        width: width,
        marginHorizontal: 10,
        marginTop: 10
      },
    } as const;
      

  return (
    <ScrollView style={styles.container}>
        <View style={{margin: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
            <TouchableOpacity style={styles.headerButton} onPress={() => null}>
                <View style={{backgroundColor: "#fff", paddingVertical: 1, paddingHorizontal: 5, borderRadius: 10}}><Text style={{fontSize: 12}}>$</Text></View>
                <Text style={styles.buttonText}>Dollars</Text>
                <Ionicons style={{color: "#fff", fontSize: 18}} name="chevron-down" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons style={{color: "#fff", fontSize: 18}} name="settings" />
            </TouchableOpacity>
        </View>
        <View style={styles.banner}>
        <View>
            <Text style={styles.title}>Total Balance</Text>
            <Text style={styles.amount}>USD 23,000</Text>
        </View>
            <View style={styles.icon}>
                <Ionicons style={{fontSize: 25, margin: "auto", color: "#fff"}} name="wallet" />
            </View>
        </View>
        <Carousel
        {...baseOptions}
            width={120}
            height={50}
            vertical={false}
         
            data={months}
            renderItem={({item}) => {
                return (
                    <TouchableOpacity style={{flexDirection: "row"}}><Text style={styles.month}>{item}</Text></TouchableOpacity>
                );
            }} 
        />
    </ScrollView>
  )
}

export default Index;

