import { View, Text, StyleSheet, Image, Linking, TouchableOpacity } from 'react-native'
import React from 'react'

const ActionCard = () => {
    const openWeb = (webLink: string) => {
        Linking.openURL(webLink)
    }
    return (
        <View>
            <Text style={styles.textHeading}>Blog Card</Text>
            <View style={styles.cardBody}>
                <Text>New about React Native</Text>
                <Image
                    source={{
                        uri: "https://as2.ftcdn.net/v2/jpg/02/55/17/43/1000_F_255174366_ojDuATz84e5h7lIlxh2moUJa9Kpd5wKk.jpg"
                    }}
                    style={styles.imageCard}
                />
                <Text numberOfLines={1}>Feb 10, 2018 - Explore Sharon Hannah's board "Forest Scenery", followed by 317 people on Pinterest. See more ideas about scenery, forest, beautiful nature.</Text>
           <View  style={styles.buttonContainer}>
           <TouchableOpacity 
            onPress={()=>openWeb("https://www.youtube.com/watch?v=eL5qYJ7y68k&list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c&index=19")}
            
            >
                <Text style={styles.button}>Read More</Text>
            </TouchableOpacity>
           <TouchableOpacity 
            onPress={()=>openWeb("https://www.youtube.com/watch?v=eL5qYJ7y68k&list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c&index=19")}
            
           >
                <Text style={styles.button}>Join Now</Text>
            </TouchableOpacity>
           </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textHeading: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        color: "white"
    },
    cardBody: {
        height: 300,
        width: "auto",
        objectFit: "cover",
        flex: 1,
        alignItems: "center",
        backgroundColor:"orange",
        borderRadius:5,
        marginHorizontal:6
    },
    imageCard: {
        height: 200,
        width: 340,
        borderTopRightRadius:5,
        borderTopLeftRadius:5
    },
    buttonContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal: 20, 
        marginTop: 10, 
        width: '100%',
    },
    button:{
        backgroundColor:"white",
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:5,
        fontWeight:"bold"
    }
})
export default ActionCard