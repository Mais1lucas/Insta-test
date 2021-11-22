import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	TouchableHighlight as TH,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const vw = Dimensions.get("screen").width;

export default function Bio() {
	return (
		<View style={styles.container}>
			<Text style={styles.bioText}>
				<B>Lucas Da Silva</B>
			</Text>
			<Text style={styles.bioText}>Cruzeiro-SP</Text>
			<Text style={styles.bioText}>21yo</Text>
			<Text style={styles.bioText}>Eng. Bioquimica - USP 🧫</Text>
			<Text style={styles.bioText}>Music & languages</Text>
			<Text style={styles.bioText}>Bluehell 💙</Text>
			<Text style={styles.bioText}>
				Seguido por <B>_geosiso</B>, <B>jammagunior</B> e{" "}
				<B>outras 450 pessoas</B>
			</Text>
			<View style={styles.containerButton}>
				<View
					style={{
						borderRadius: 5,
						marginHorizontal: 3,
						overflow: "hidden",
						flex: 5,
					}}
				>
					<TH onPress={() => {}}>
						<View style={styles.btn}>
							<Text style={{ color: "#3CAE10" }}>
								<B>Seguindo </B>
								<FontAwesome5
									name="chevron-down"
									size={14}
									color="#3CAE10"
								/>
							</Text>
						</View>
					</TH>
				</View>
				<View
					style={{
						borderRadius: 5,
						marginHorizontal: 3,
						overflow: "hidden",
						flex: 5,
					}}
				>
					<TH onPress={() => {}}>
						<View style={styles.btn}>
							<Text style={{ color: "#fff" }}>
								<B>Mensagem</B>
							</Text>
						</View>
					</TH>
				</View>
				<View
					style={{
						borderRadius: 5,
						marginHorizontal: 3,
						overflow: "hidden",
						flex: 1,
					}}
				>
					<TH onPress={() => {}}>
						<View style={styles.btn}>
							<FontAwesome5
								name="chevron-down"
								size={14}
								color="#fff"
							/>
						</View>
					</TH>
				</View>
			</View>
		</View>
	);
}

function B(props) {
	return <Text style={{ fontWeight: "bold" }}>{props.children}</Text>;
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#1a1a1a",
		width: vw,
		paddingHorizontal: 15,
		paddingBottom: 22,
	},

	bioText: {
		color: "#fff",
		fontSize: 14.6,
	},

	containerButton: {
		flexDirection: "row",
		marginTop: 22,
	},

	btn: {
		backgroundColor: "#000",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 5,
		borderWidth: 1.5,
		borderColor: "#565656",
		height: 30,
		flexDirection: "row",
	},
});
