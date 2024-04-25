import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'

const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'Hitesh Choudhary',
      status: 'Just an extra ordinary teacher',
      imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
    },
    {
      uid: 2,
      name: 'Anurag Tiwari',
      status: 'I ❤️ To Code and Teach!',
      imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
    },
    {
      uid: 3,
      name: 'Sanket Singh',
      status: 'Making your GPay smooth',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 4,
      name: 'Anirudh Jwala',
      status: 'Building secure Digital banks',
      imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
    },
  ];
  return (
    <View>
      <Text style={styles.textHeading}>ContactList</Text>

      <ScrollView
        scrollEnabled={false}
        style={styles.container}>
        {contacts.map(({ uid, name, imageUrl, status }) => (
          <View key={uid}
            style={styles.userCard}
          >
            <Image
              source={{
                uri: imageUrl
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>

        ))}

      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  textHeading: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 8
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4
  },
  userCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3,
    backgroundColor:"#8D3DAF",
    borderRadius:10,
    padding:5
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 14
  },
  userName: {
    fontWeight: "600",
    color: "#ffff"
  },
  userStatus: {
    fontSize: 12
  }
})

export default ContactList