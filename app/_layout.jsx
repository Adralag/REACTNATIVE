import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Stack, Tabs } from 'expo-router';
import { StackScreen } from 'react-native-screens';
import { Ionicons } from  '@expo/vector-icons';

const _layout = () => {
  return (
    <Tabs screenOptions={{
      headerStyle: styles.headerStyle,
      headerTintColor: styles.headerTitleStyle.color,
      headerTitleStyle: styles.headerTitleStyle,
      headerBackTitleVisible: false,
      
      tabBarActiveTintColor: '#FFD700',
      tabBarInactiveTintColor: '#CCCCCC',
      tabBarStyle: styles.tabBarStyle,
    }}>

      <Tabs.Screen 
        name="index" 
        options={{ 
          title: "Home", 
          headerShown: false,    
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused? "home" : 'home-outline'} size={24} color='black' />
          ),
        }} 
      />

      <Tabs.Screen 
        name="experience" 
        options={{
          title: "Work Experience", 
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused? "briefcase" : 'briefcase-outline'} size={24} color='black'/>
          ),
        }} 
      />

      <Tabs.Screen 
        name="projects" 
        options={{ 
          title: "Projects", 
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused? "build" : 'build-outline'} size={24} color='black' />
          ),
        }} 
      />

      <Tabs.Screen 
        name="contact" 
        options={{ 
          title: "Contact Us", 
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused? "mail" : 'mail-outline'} size={24} color='black' />
          ),
        }} 
      />
      
      <Tabs.Screen 
        name="FAQ" 
        options={{ 
          title: "FAQ", 
          tabBarIcon: ({ focused }) => (
            <Ionicons name={focused? "help-circle" : 'help-circle-outline'} size={24} color='black' />
          ),
        }} 
      />

    </Tabs>
  );
}

export default _layout;

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#1F3A64', 
    height: 90,
    elevation: 4, 
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FFD700', 
  },
  tabBarStyle: {
    backgroundColor: '#1F3A64',
    borderTopWidth: 1,
    borderTopColor: '#0C1C35',
    height: 60,
    paddingBottom: 5,
  },
  rootContainer: {
    flex: 1,
    backgroundColor: '#1E2A3A',
  }
});