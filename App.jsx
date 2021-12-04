import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { DualScreenInfo, Hinge } from 'react-native-dualscreeninfo'

export default function App() {
  const [isDualMode, setDualMode] = useState(DualScreenInfo.isSpanning)
    useEffect(() => {
        DualScreenInfo.addEventListener('didUpdateSpanning', ({ isSpanning }) => {
            if (isDualMode !== isSpanning) {
                setDualMode(isSpanning)
            }
        })
    })

    if (isDualMode) {
      return (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ flex: 1 }}>
            <Text style={{fontSize: 50, textCenter: "center", marginTop: 55}}>Bonjour moi, C'est Ali</Text>
          </View>
          <Hinge/>
          <View style={{ flex: 1 }}>
            <Text style={{fontSize: 50, textCenter: "center", marginTop: 55}}>Bonjour moi, C'est Mael</Text>
          </View>
        </View>
      )
    }

    return (
      <View style={{ flex: 1 }}>
        <Text style={{fontSize: 50, textCenter: "center", marginTop: 55}}>Bonjour moi, C'est John</Text>
      </View>  
    )
}