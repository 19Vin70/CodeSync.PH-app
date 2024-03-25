import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={{padding: 10, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
        <Text style={{fontSize: 23, fontWeight: 'bold', letterSpacing: 1.5, textTransform: 'uppercase'} }>CodeSync.PH</Text>
        <TouchableOpacity style={{backgroundColor: 'orangered', padding: 10, paddingHorizontal: 20, borderRadius: 20}}>
            <Text style={{color: '#000', fontSize: 14, letterSpacing: .5, fontWeight: 'bold'}}>Discover</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Header
