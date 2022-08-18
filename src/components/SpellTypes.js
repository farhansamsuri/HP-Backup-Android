import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';

import styles from "../styles/Stylesheet";
import bgBar from "../../assets/categorybar.png";
import bgImage from "../../assets/bgImage2.png";
import { useNavigation } from '@react-navigation/native';

const SpellTypes = () => {

    //Navigation
    const navigation = useNavigation();

    //For the Croissant Font
    const [fontsLoaded] = useFonts({
        'CroissantOne': require('../../assets/fonts/CroissantOne.ttf'),
      });
      if (!fontsLoaded) {
        return null;
      }

    return (
        <View>

            <ImageBackground
                style={styles.bg}
                source={bgImage}>

                <ImageBackground
                        source={bgBar}
                        style={styles.bar1}>
                <TouchableOpacity
                    onPress={() => {navigation.navigate('SpellList', {spellType: 'Transfiguration'})}}
                    hitSlop={{top: 10, bottom: 10, left: 50, right: 40}}>
                    
                        <Text style={styles.text}>TRANSFIGURATION</Text>
                        </TouchableOpacity>
                    </ImageBackground>

                <ImageBackground
                        source={bgBar}
                        style={styles.bar2}>
                <TouchableOpacity
                    onPress={() => {navigation.navigate('SpellList', {spellType: 'Charm'})}}
                    hitSlop={{top: 10, bottom: 10, left: 90, right: 90}}>
                    
                        <Text style={styles.text}>CHARM</Text>
                        </TouchableOpacity>
                    </ImageBackground>

                <ImageBackground
                        source={bgBar}
                        style={styles.bar3}>
                <TouchableOpacity
                    onPress={() => {navigation.navigate('SpellList', {spellType: 'Jinx'})}}
                    hitSlop={{top: 10, bottom: 10, left: 90, right: 90}}>
                    
                        <Text style={styles.text}>JINX</Text>
                        </TouchableOpacity>
                    </ImageBackground>


                <ImageBackground
                        source={bgBar}
                        style={styles.bar4}>
                <TouchableOpacity
                    onPress={() => {navigation.navigate('SpellList', {spellType: 'Hex'})}}
                    hitSlop={{top: 10, bottom: 10, left: 90, right: 90}}>
                    
                        <Text style={styles.text}>HEX</Text>
                        </TouchableOpacity>
                    </ImageBackground>


                <ImageBackground
                        source={bgBar}
                        style={styles.bar5}>
                <TouchableOpacity
                    onPress={() => {navigation.navigate('SpellList', {spellType: 'CounterSpell'})}}
                    hitSlop={{top: 10, bottom: 10, left: 30, right: 30}}>
                    
                        <Text style={styles.text}>COUNTER-SPELL</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                <ImageBackground
                        source={bgBar}
                        style={styles.bar6}>
                <TouchableOpacity
                    onPress={() => {navigation.navigate('SpellList', {spellType: 'HealingSpell'})}}
                    hitSlop={{top: 10, bottom: 10, left: 30, right: 30}}>
                    
                        <Text style={styles.text}>HEALING SPELL</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                
                


            </ImageBackground>
        </View>
    );
}

export default SpellTypes; 