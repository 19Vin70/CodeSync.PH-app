import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const HomeScreen = () => {
  return (
    <View>
        <View style={{padding: 30}}>
            <Image source={require('../assets/codesync.jpg')} style={{width: '100%', height: 300, borderRadius: 40}} />
        </View>
          
        <View style={{padding: 10, paddingHorizontal: 30}}>
            <Text style={{fontSize: 16.5, letterSpacing: .5}}>AT CodeSync.PH, we're more than just a community of programmers; we're family of passionate learners, creators, and problem solvers. Whether you're a seasoned developer or just starting your coding journey, you've found your home.</Text>
        </View>

        <View style={{marginTop: 50, paddingHorizontal: 30}}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 5, backgroundColor: '#ccc', width: 130, padding: 10, paddingHorizontal: 30, borderRadius: 5}}>
                <Text style={ { letterSpacing: .5, color: '#000', fontWeight: 'bold'} }>Explore</Text>
                <Ionicons name='arrow-forward-outline' size={20} color='#000' />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default HomeScreen