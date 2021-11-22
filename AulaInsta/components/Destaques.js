import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { ColorsStory, Story } from "./Story";

import Destaques1 from "../assets/Destaques/show.jpg";
import Destaques2 from "../assets/Destaques/viagens.jpg";
import Destaques3 from "../assets/Destaques/mindBlowing.jpg";
import Destaques4 from "../assets/Destaques/thisIsFine.jpg";
import Destaques5 from "../assets/Destaques/estoyBien.jpg";
import Destaques6 from "../assets/Destaques/festas.jpg";

export default function Destaques() {
	return (
		<View style={styles.container}>
			<ScrollView horizontal>
				<View style={[styles.destaque, { marginLeft: 3 }]}>
					<Story
						colors={ColorsStory.Destaques}
						size={63}
						source={Destaques1}
					/>
					<Text
						ellipsizeMode="tail"
						numberOfLines={1}
						style={styles.text}
					>
						Shows
					</Text>
				</View>
				<View style={styles.destaque}>
					<Story
						colors={ColorsStory.Destaques}
						size={63}
						source={Destaques2}
					/>
					<Text
						ellipsizeMode="tail"
						numberOfLines={1}
						style={styles.text}
					>
						Viagens
					</Text>
				</View>
				<View style={styles.destaque}>
					<Story
						colors={ColorsStory.Destaques}
						size={63}
						source={Destaques3}
					/>
					<Text
						ellipsizeMode="tail"
						numberOfLines={1}
						style={styles.text}
					>
						Mind Blowing
					</Text>
				</View>
				<View style={styles.destaque}>
					<Story
						colors={ColorsStory.Destaques}
						size={63}
						source={Destaques4}
					/>
					<Text
						ellipsizeMode="tail"
						numberOfLines={1}
						style={styles.text}
					>
						To bem po
					</Text>
				</View>
				<View style={styles.destaque}>
					<Story
						colors={ColorsStory.Destaques}
						size={63}
						source={Destaques5}
					/>
					<Text
						ellipsizeMode="tail"
						numberOfLines={1}
						style={styles.text}
					>
						Estoy bien
					</Text>
				</View>
				<View style={styles.destaque}>
					<Story
						colors={ColorsStory.Destaques}
						size={63}
						source={Destaques6}
					/>
					<Text
						ellipsizeMode="tail"
						numberOfLines={1}
						style={styles.text}
					>
						Festas
					</Text>
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#1a1a1a",
		height: 90,
	},

	destaque: {
		alignItems: "center",
		justifyContent: "center",
		padding: 2,
		width: 82,
	},

	text: {
		color: "#fff",
		fontSize: 12,
		paddingTop: 3,
		fontWeight: "300",
	},
});
