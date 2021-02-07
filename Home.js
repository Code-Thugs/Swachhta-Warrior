import React from "react";
import { Image, ImageBackground,View, Text} from 'react-native';
import styles from './styles';


const Home = () => {
    return(
        <View style={styles.container}>
            <ImageBackground source={require("./assets/Back.jpg")} style={styles.bgimg}>
                <View style= {styles.container}>
                <Image source={require("./assets/WoodBoard.png")} style={styles.img}></Image>
                <Image source={require("./assets/boardTopPlay.png")} style={styles.img}></Image>
                <Image source={require("./assets/boardBottomScan.png")} style={styles.img}></Image>
                <Image source={require("./assets/Kids.png")} style={styles.img}></Image>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Home;
