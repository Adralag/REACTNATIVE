import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const AboutPage = () => { // Renamed component for clarity
  return (
    <View style={styles.rootContainer}> 

      <View style={styles.navbar}>
        <Link href="/" style={styles.navButton}>Home</Link>
        <Link href="/experience" style={styles.navButton}>Work Experience</Link>
        <Link href="/projects" style={styles.navButton}>Projects</Link>
        <Link href="/contact" style={styles.navButton}>Contact Us</Link>
      </View>

      <View style={styles.mainContent}>
        <Text style={styles.mainTitle}>About The Developer</Text> 
        
        <View style={styles.profileCard}>
            <Text style={styles.bioText}>
                Hello! I'm Adedoja Daniel Ademola. 
                {'\n'}
                I am the son of Major General AT Adedoja and Engineer Adeola Olubunmi Adedoja. I am an aspiring Project Manager focused on delivering high-quality results.
                {'\n'}
                This portfolio is a showcase of my skills and experience in development and project coordination.
            </Text>
        </View>
      </View>

    </View>
  )
}

export default AboutPage 

const styles = StyleSheet.create({

  rootContainer: {
    flex: 1,
    backgroundColor: '#EAEFF2', // Very light gray/blue background
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
    paddingTop: 40, // Space for the device status bar (Safe Area)
  },
  navButton: { 
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  mainContent: {
    flex: 1,
    justifyContent: 'flex-start', // Start content below the navbar
    alignItems: 'center', 
    paddingTop: 100, 
    paddingHorizontal: 20,
  },
  
  mainTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#1F3A64',
    marginBottom: 30,
    textAlign: 'center',
  },
  
  profileCard: {
    width: '100%',
    maxWidth: 600, // Limit width on large screens
    padding: 25,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4, // Android shadow
  },
  bioText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333333',
  },
  
})