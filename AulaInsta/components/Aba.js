import React from "react";
import {
	View,
	StyleSheet,
	Dimensions,
	Image,
	TouchableNativeFeedback as TNF,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const vw = Dimensions.get("screen").width;

export default function AbstractRange() {
	return (
		<View style={styles.container}>
			<View style={styles.tab}>
				<MaterialIcons name="grid-on" size={25} color="#fff" />
			</View>
			<View style={styles.tab}>
				<Image
					style={styles.reels}
					source={require("../assets/Icons/reels.png")}
				/>
			</View>
			<View style={styles.tab}>
				<View style={styles.person}>
					<MaterialIcons name="person" size={22} color="#D4D4D4" />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#1a1a1a",
		width: vw,
		height: 50,
		borderColor: "#565656",
		borderTopWidth: 0.2,
		flexDirection: "row",
	},

	person: {
		borderColor: "#D4D4D4",
		borderWidth: 0.9,
		borderRadius: 5,
	},

	tab: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},

	reels: {
		height: 28,
		width: 28,
	},
});
