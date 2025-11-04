import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const ContactPage = () => { // Renamed component for clarity
  return (
    <View style={styles.rootContainer}> 
      <View style={styles.navbar}>
        <Link href="/" style={styles.navButton}>Home</Link>
        <Link href="/experience" style={styles.navButton}>Work Experience</Link>
        <Link href="/projects" style={styles.navButton}>Projects</Link>
        <Link href="/FAQ" style={styles.navButton}>FAQ</Link>
      </View>
      <View style={styles.mainContent}>
        <Text style={styles.mainTitle}>Contact Information</Text>
        <View style={styles.contactDetails}>
          <Text style={styles.contactText}>📞 Phone Number: 08112587999</Text>
          <Text style={styles.contactText}>📧 Email: adedojadaniel@gmail.com</Text>
        </View>
      </View>
    </View>
  )
}
export default ContactPage

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Clean white background
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
    paddingTop: 80, 
    paddingHorizontal: 20,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: '#2C3E50',
    marginBottom: 30,
  },
  contactDetails: {
    alignItems: 'flex-start',
    padding: 20,
    backgroundColor: '#F9F9F9', // Slightly off-white background for the block
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    width: '90%',
  },
  contactText: { 
    fontSize: 18,
    color: '#34495E', // Dark blue text for readability
    marginVertical: 10,
    fontWeight: '500',
  },
})