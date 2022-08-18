import { Dimensions, StyleSheet } from "react-native";

//Trying to fix the background image to fit full screen under bg, can remove if not needed
const win = Dimensions.get('window');
const ratio = win.height/844

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg: {
        /* width: 390 * ratio,
        height: win.height,
        // resizeMode: 'contain',
        // justifyContent: 'center',
        alignItems: 'center', */
        flex: 1,
        justifyContent: 'center',
        width: 393,
        height: 803,
    },
    bar1: { 
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 1,
        margin: 10,
        width: 211,
        height: 39,
        top: 185,
        left: 89
    },
    bar2: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 1,
        margin: 10,
        width: 211,
        height: 39,
        top: 258,
        left: 89
    },
    bar3: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 1,
        margin: 10,
        width: 211,
        height: 39,
        top: 330,
        left: 89
    },
    bar4: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 1,
        margin: 10,
        width: 211,
        height: 39,
        top: 403,
        left: 89
    },
    bar5: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 1,
        margin: 10,
        width: 211,
        height: 39,
        top: 475,
        left: 89
    },
    bar6: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: 1,
        margin: 10,
        width: 211,
        height: 39,
        top: 548 ,
        left: 89
    },
    text: {
        color: 'white',
        fontFamily: 'CroissantOne',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 23,
    },
});

export default styles;