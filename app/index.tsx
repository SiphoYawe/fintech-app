import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useAssets } from "expo-asset";
import { ResizeMode, Video } from "expo-av";
import { Link } from "expo-router";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";

const index = () => {
	const [assets] = useAssets([require("@/assets/videos/intro.mp4")]);
	return (
		<View style={styles.container}>
			{assets && (
				<Video
					resizeMode={ResizeMode.COVER}
					isMuted={true}
					shouldPlay={true}
					isLooping={true}
					source={{ uri: assets[0].uri }}
					style={styles.video}
				/>
			)}
			<View style={{ marginTop: 80, padding: 30 }}>
				<Text style={styles.header}>Ready to Change the Way you money?</Text>
			</View>
			<View style={styles.buttonsContainer}>
				<Link
					href={"login"}
					style={[
						defaultStyles.pillButton,
						{ flex: 1, backgroundColor: Colors.dark },
					]}
					asChild>
					<TouchableOpacity>
						<Text style={{ color: "#fff", fontSize: 22, fontWeight: "500" }}>
							Log In
						</Text>
					</TouchableOpacity>
				</Link>
				<Link
					href={"signup"}
					style={[
						defaultStyles.pillButton,
						{ flex: 1, backgroundColor: "#fff" },
					]}
					asChild>
					<TouchableOpacity>
						<Text style={{ fontSize: 22, fontWeight: "500" }}>Sign Up</Text>
					</TouchableOpacity>
				</Link>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",
	},
	video: {
		width: "100%",
		height: "100%",
		position: "absolute",
	},
	header: {
		fontSize: 36,
		fontWeight: "900",
		textTransform: "uppercase",
		color: "#fff",
	},
	buttonsContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		gap: 20,
		marginBottom: 60,
		paddingHorizontal: 20,
	},
});

export default index;
