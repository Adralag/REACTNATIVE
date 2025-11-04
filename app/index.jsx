import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Home = () => {
  return (
    <View style={styles.rootContainer}> 

      <View style={styles.navbar}>
        <Link href="/experience" style={styles.navButton}>Work Experience</Link>
        <Link href="/projects" style={styles.navButton}>Projects</Link>
        <Link href="/contact" style={styles.navButton}>Contact Us</Link>
        <Link href="/FAQ" style={styles.navButton}>FAQ</Link>
      </View>

      <View style={styles.container}>
        <Image style={styles.smallLogo} source={require('../assets/image/d.jpg')}/>
        <Image style={styles.mainImage} source={require('../assets/image/c.jpg')}/>
      </View>

      <View style={styles.container1}>
        <Text style={styles.mainTitleText}>Welcome To</Text>
        <Text style={styles.mainTitleText}>My Portfolio</Text> 
      </View>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({

  rootContainer: {
    flex: 1,
    backgroundColor: '#1E2A3A', // Deep blue/slate background for contrast
    paddingTop: 80, // Adds space at the top to prevent content from hiding behind the navbar
  },
  navbar: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1F3A64', // Dark blue/navy background
    paddingVertical: 15, // Increased padding
    zIndex: 10,
  },
  navButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 15, // Slightly increased size
    fontWeight: '700', // Bolder font
    color: '#FFFFFF', // Pure white text
  },

  container: {
    flex: 2, // Gives this section more space
    justifyContent: 'center',
    alignItems: 'center', // FIX 3: Changed to 'center' to align images centrally
  },
  mainImage: { // Previously 'image'
    width: 250, // Slightly increased size
    height: 250,
    margintop: 10,
    borderRadius: 180, // Rounded corners for better aesthetics
  },
  smallLogo: { // Previously 'image1'
    width: 80, // Increased size for visibility
    height: 80,
    resizeMode: 'contain',
    marginBottom: 20,
    borderRadius: 40, // Make it circular
  },
    container1: {
    flex: 1, // Gives this section less space than the images
    justifyContent: 'flex-start', // Align title closer to the image section
    alignItems: 'center',
    paddingVertical: 20,
  },
  mainTitleText: { // Previously 'title'
    fontSize: 34, // Slightly reduced for better fit
    fontWeight: 'bold',
    fontFamily: 'Arial',
    color: '#FFD700', // Gold/yellow color for high contrast and school colors
    textShadowColor: 'rgba(0, 0, 0, 0.5)', 
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 3,
    marginVertical: 4,
  },
})