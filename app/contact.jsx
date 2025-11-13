import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const ContactPage = () => {
    const handleSubmit = () => {
        alert('Form Submitted! (Functionality not yet implemented)');
    };

    return (
        <View style={styles.rootContainer}>
            <View style={styles.navbar}>
                <Link href="/" style={styles.navButton}>Home</Link>
                <Link href="/experience" style={styles.navButton}>Work Experience</Link>
                <Link href="/projects" style={styles.navButton}>Projects</Link>
                <Link href="/FAQ" style={styles.navButton}>FAQ</Link>
            </View>
            
            <View style={styles.mainContent}>
                <Text style={styles.mainTitle}>Contact Me</Text>

                <View style={styles.formContainer}>
                    <TextInput 
                        style={styles.inputField} 
                        placeholder="Your Name"
                        placeholderTextColor="#888" 
                    />

                    <TextInput 
                        style={styles.inputField} 
                        placeholder="Your Email"
                        placeholderTextColor="#888"
                        keyboardType="email-address"
                    />

                    <TextInput 
                        style={[styles.inputField, styles.messageInput]} 
                        placeholder="Your Message"
                        placeholderTextColor="#888"
                        multiline={true}
                        numberOfLines={4}
                        textAlignVertical="top" // Ensure text starts at the top of the box
                    />

                    <TouchableOpacity 
                        style={styles.submitButton} 
                        onPress={handleSubmit}
                    >
                        <Text style={styles.submitButtonText}>Send Message</Text>
                    </TouchableOpacity>
                </View>

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
        backgroundColor: '#FFFFFF',
    },
    navbar: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#1F3A64', 
        paddingVertical: 15,
        zIndex: 10,
        paddingTop: 40,
        shadowColor: '#000', // Added shadow for separation
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    navButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#ECF0F1',
    },
    mainContent: {
        flex: 1,
        alignItems: 'center',
        // Fix: Changed justifyContent to 'flex-start' and added margin to prevent overlap
        justifyContent: 'flex-start',
        paddingHorizontal: 20,
        paddingTop: 30, // Padding below the navbar
    },
    mainTitle: {
        fontSize: 32,
        fontWeight: '900',
        color: '#2C3E50',
        marginBottom: 20,
    },
    formContainer: {
        width: '100%',
        maxWidth: 400, // Added max-width for better desktop/tablet view
        marginBottom: 30,
    },
    inputField: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#BDC3C7', // Lighter grey border
        padding: 12,
        marginBottom: 15,
        borderRadius: 6,
        backgroundColor: '#FFF',
        fontSize: 16,
        color: '#34495E',
    },
    messageInput: {
        height: 120, // Taller height for the message field
    },
    submitButton: {
        backgroundColor: '#1F3A64', // Use the navbar's primary color
        padding: 15,
        borderRadius: 6,
        alignItems: 'center',
        marginTop: 10,
    },
    submitButtonText: {
        color: '#ECF0F1',
        fontSize: 18,
        fontWeight: 'bold',
    },
    contactDetails: {
        alignItems: 'flex-start',
        padding: 20,
        backgroundColor: '#F9F9F9',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#EAEAEA',
        width: '100%',
        maxWidth: 400,
    },
    contactText: {
        fontSize: 18,
        color: '#34495E',
        marginVertical: 5, // Reduced vertical margin for compactness
        fontWeight: '500',
    },
})