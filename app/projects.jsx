import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const ProjectsPage = () => { // Renamed component for clarity (as it's a Projects Page)
  return (
    <View style={styles.rootContainer}> 

      <View style={styles.navbar}>
        <Link href="/" style={styles.navButton}>Home</Link>
        <Link href="/experience" style={styles.navButton}>Work Experience</Link>
        <Link href="/contact" style={styles.navButton}>Contact Us</Link>
        <Link href="/FAQ" style={styles.navButton}>FAQ</Link>
      </View>

      <View style={styles.mainContent}>
        <Text style={styles.title}>This is the Projects Page</Text>
        <Text style={styles.bodyText}>List your amazing projects below!</Text>
      </View>
        
    </View>
  )
}
export default ProjectsPage

const styles = StyleSheet.create({

  rootContainer: {
    flex: 1,
    backgroundColor: '#F0F0F0', // Light grey background
  },
  navbar: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1F3A64', // Dark blue/navy background
    paddingVertical: 15,
    zIndex: 10,
    paddingTop: 40, 
  },
  navButton: { 
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#ECF0F1', // Light text color
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    paddingTop: 100, 
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32, // Adjusted size
    fontWeight: '900', // Extra bold
    color: '#2C3E50', // Dark text color for readability
    marginBottom: 20,
  },
  bodyText: {
    fontSize: 18,
    color: '#7F8C8D',
  },
})