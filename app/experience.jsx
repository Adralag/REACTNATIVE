import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const ExperiencePage = () => { // Renamed component for clarity
  return (
    <View style={styles.rootContainer}> 

      <View style={styles.navbar}>
        <Link href="/" style={styles.navButton}>Home</Link>
        <Link href="/contact" style={styles.navButton}>Contact Us</Link>
        <Link href="/projects" style={styles.navButton}>Projects</Link>
        <Link href="/FAQ" style={styles.navButton}>FAQ</Link>
      </View>

      <View style={styles.mainContent}>
        <Text style={styles.pageTitle}>My Work Experience as an Aspiring Project Manager</Text>
        
        <View style={styles.experienceList}>
          <Text style={styles.experienceItem}>
            <Text style={styles.itemNumber}>1. </Text>
            <Text style={styles.jobTitle}>Internship at Tech Solutions Ltd - </Text>
            Assisted in project planning and coordination.
          </Text>
          <Text style={styles.experienceItem}>
            <Text style={styles.itemNumber}>2. </Text>
            <Text style={styles.jobTitle}>Volunteer Project Coordinator at Local NGO - </Text>
            Managed community outreach programs.
          </Text>
          <Text style={styles.experienceItem}>
            <Text style={styles.itemNumber}>3. </Text>
            <Text style={styles.jobTitle}>Freelance Project Assistant - </Text>
            Supported small business projects with scheduling and resource allocation.
          </Text>
        </View>
      </View>
    </View>
  )
}

export default ExperiencePage

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#F7F7F7', // Light, neutral background
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
    paddingTop: 40, // Space for the device status bar
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
    alignItems: 'flex-start', // Align content to the start (left)
    paddingTop: 100, // FIX 3: Push content down below the fixed navbar
    paddingHorizontal: 20,
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#333333',
    marginBottom: 25,
    textAlign: 'left',
  },
  experienceList: {
    width: '100%',
  },
  experienceItem: {
    fontSize: 16,
    lineHeight: 28, // Better line spacing for paragraphs
    color: '#555555',
    marginBottom: 15,
    padding: 15,
    backgroundColor: '#FFFFFF', // White card background for each item
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2, // Android shadow
  },
  itemNumber: {
    fontWeight: 'bold',
    color: '#007ACC', // Highlight color
  },
  jobTitle: {
    fontWeight: 'bold',
    color: '#333333',
  },
})