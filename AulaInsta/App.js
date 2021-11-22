import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from "../../Aula insta Vallim/AulaInsta/components/Header";
import Infos from "../AulaInsta/components/Infos";
import Bio from "../AulaInsta/components/Bio";
import Destaques from "../AulaInsta/components/Destaques";
import Aba from "../AulaInsta/components/Aba";
import Posts from "../AulaInsta/components/Posts";

export default function App() {
	return (
		<>
			<Header />
			<ScrollView
				stickyHeaderIndices={[3]}
				style={{ backgroundColor: "#1a1a1a" }}
			>
				<Infos />
				<Bio />
				<Destaques />
				<Aba />
				<Posts />
			</ScrollView>
		</>
	);
}
