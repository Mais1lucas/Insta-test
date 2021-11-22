import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { Story, ColorsStory } from "./Story";

const vw = Dimensions.get("screen").width;

import PhotoPerfil from "../assets/Images/perfil1.jpg";

export default function Infos() {
	return (
		<View style={styles.container}>
			<Story source={PhotoPerfil} size={92} colors={ColorsStory.Story} />
			<View style={styles.containerInfo}>
				<View style={styles.info}>
					<Text style={[styles.text, styles.number]}>5</Text>
					<Text style={styles.text}>Publicações</Text>
				</View>
				<View style={styles.info}>
					<Text style={[styles.text, styles.number]}>455</Text>
					<Text style={styles.text}>Seguidores</Text>
				</View>
				<View style={styles.info}>
					<Text style={[styles.text, styles.number]}>472</Text>
					<Text style={styles.text}>Seguindo</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#1a1a1a",
		width: vw,
		height: 110,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 20,
	},

	containerInfo: {
		flexDirection: "row",
		alignItems: "center",
		flex: 1,
		justifyContent: "space-around",
		paddingLeft: 10,
	},

	info: {
		alignItems: "center",
	},

	number: {
		fontSize: 19,
		fontWeight: "bold",
	},

	text: {
		color: "#fff",
	},
});
