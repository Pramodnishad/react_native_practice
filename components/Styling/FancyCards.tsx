import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const FancyCards = () => {
    return (
        <View >
            <Text style={styles.textHeading}>Trending Places</Text>
            <View style={[styles.card, styles.cardElavated]}>
                <Image source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg/375px-East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg"

                }}
                    style={styles.image}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Hawa Mahal</Text>
                    <Text style={styles.cardLabel}>Pink City , Jaipur</Text>
                    <Text style={styles.cardDescription}>The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers.</Text>
                    <Text style={styles.cardDistance}>12 mins away</Text>
                </View>
            </View>
            <View style={[styles.card, styles.cardElavated]}>
                <Image source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg/375px-East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg"

                }}
                    style={styles.image}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Hawa Mahal</Text>
                    <Text style={styles.cardLabel}>Pink City , Jaipur</Text>
                    <Text style={styles.cardDescription}>The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers.</Text>
                </View>
            </View>
            <View style={[styles.card, styles.cardElavated]}>
                <Image source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg/375px-East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg"

                }}
                    style={styles.image}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Hawa Mahal</Text>
                    <Text style={styles.cardLabel}>Pink City , Jaipur</Text>
                    <Text style={styles.cardDescription}>The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers.</Text>
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
        color:"white"
    },
    card: {
        height: 350,
        width: 340,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 10,
    },
    cardElavated: {
        backgroundColor: "#fffff",
        color: "#00000",
        shadowOffset: {
            height: 1,
            width: 1
        }
    },
    image: {
        height: 180,
        objectFit:"fill",
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    cardBody: {
        flex:1,
        flexGrow:1,
        paddingHorizontal:12,
        backgroundColor:"#ffff",
        borderBottomEndRadius:8,
        borderBottomStartRadius:8
    },
    cardTitle: {
        fontSize:22,
        marginVertical:5,
        fontWeight:"600"

    },
    cardLabel: {
color:"#000000",
fontSize:12,
marginBottom:12,
flexShrink:1
    },
    cardDescription: {

    },
    cardDistance:{
        marginTop:10,
        fontWeight:"bold"
    }
})

export default FancyCards