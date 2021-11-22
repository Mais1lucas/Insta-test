import React from "react";
import {
	View,
	StyleSheet,
	Image,
	Dimensions,
	TouchableOpacity as TO,
} from "react-native";

const vw = Dimensions.get("screen").width;

const imagens = [
	{
		id: Math.random(),
		source: require("../assets/Images/foto1.jpeg"),
		icon: null,
	},
	{
		id: Math.random(),
		source: require("../assets/Images/foto2.jpeg"),
		icon: "fotos",
	},
	{
		id: Math.random(),
		source: require("../assets/Images/foto3.jpeg"),
		icon: "reels",
	},
	{
		id: Math.random(),
		source: require("../assets/Images/foto4.jpeg"),
		icon: "fotos",
	},
	{
		id: Math.random(),
		source: require("../assets/Images/foto5.jpeg"),
		icon: null,
	},
	{
		id: Math.random(),
		source: require("../assets/Images/foto6.jpeg"),
		icon: "fotos",
	},
	{
		id: Math.random(),
		source: require("../assets/Images/foto7.jpeg"),
		icon: null,
	},
	{
		id: Math.random(),
		source: require("../assets/Images/foto8.jpeg"),
		icon: null,
	},
	{
		id: Math.random(),
		source: require("../assets/Images/foto9.jpeg"),
		icon: "reels",
	},
	{
		id: Math.random(),
		source: require("../assets/Images/foto10.jpeg"),
		icon: "fotos",
	},
	{
		id: Math.random(),
		source: require("../assets/Images/foto11.jpeg"),
		icon: "fotos",
	},
	{
		id: Math.random(),
		source: require("../assets/Images/foto12.jpeg"),
		icon: "fotos",
	},
	{
		id: Math.random(),
		source: require("../assets/Images/foto13.jpeg"),
		icon: "fotos",
	},
	{
		id: Math.random(),
		source: require("../assets/Images/foto14.jpeg"),
		icon: null,
	},
	{
		id: Math.random(),
		source: require("../assets/Images/foto15.jpeg"),
		icon: null,
	},
	{
		id: Math.random(),
		source: require("../assets/Images/foto16.jpeg"),
		icon: "fotos",
	},
	{
		id: Math.random(),
		source: require("../assets/Images/foto17.jpeg"),
		icon: null,
	},
	{
		id: Math.random(),
		source: require("../assets/Images/foto18.jpeg"),
		icon: null,
	},
	{
		id: Math.random(),
		source: require("../assets/Images/foto19.jpeg"),
		icon: null,
	},
];

export default function Posts() {
	return <View style={styles.containerPosts}>{Post()}</View>;
}

function Post() {
	return imagens.map((element) => {
		return (
			<View key={element.id} style={styles.container}>
				<TO onPress={() => {}}>
					<Image source={element.source} style={styles.image} />
				</TO>
				{element.icon === "fotos" && (
					<Image
						style={styles.icon}
						source={require("../assets/Icons/fotos.png")}
					/>
				)}
				{element.icon === "reels" && (
					<Image
						style={[styles.icon, { width: 20 }, { height: 20 }]}
						source={require("../assets/Icons/reelsW.png")}
					/>
				)}
			</View>
		);
	});
}

const styles = StyleSheet.create({
	containerPosts: {
		flex: 1,
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "flex-start",
		backgroundColor: "#1a1a1a",
	},

	container: {
		position: "relative",
	},

	image: {
		width: vw / 3 - 2,
		height: vw / 3 - 2,
		margin: 1,
	},

	icon: {
		position: "absolute",
		top: 8,
		right: 8,
	},
});
