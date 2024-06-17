import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	Platform,
} from "react-native";
import React from "react";
import { useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";

const SignUp = () => {
	const onSignUp = async () => {};
	const [countryCode, setcountryCode] = useState("🇺🇬 +256");
	const [phoneNumber, setphoneNumber] = useState<string>();
	const KeyboardVerticalOffset = Platform.OS == "ios" ? 90 : 0;

	return (
		<KeyboardAvoidingView
			style={{ flex: 1 }}
			behavior="padding"
			keyboardVerticalOffset={KeyboardVerticalOffset}>
			<View style={defaultStyles.container}>
				<Text style={defaultStyles.header}>Let's get started</Text>
				<Text style={defaultStyles.descriptionText}>
					Enter your phone number and we shall send you a confirmation code.
				</Text>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						placeholder="Country Code"
						placeholderTextColor={Colors.gray}
						value={countryCode}
					/>
					<TextInput
						style={[styles.input, { flex: 1 }]}
						placeholder="Enter your phone number"
						placeholderTextColor={Colors.gray}
						keyboardType="numeric"
						value={phoneNumber}
						onChangeText={setphoneNumber}
					/>
				</View>
				<Link href={"/login"} replace asChild>
					<TouchableOpacity>
						<Text style={defaultStyles.textLink}>
							Already have an account? Log in
						</Text>
					</TouchableOpacity>
				</Link>

				<View style={{ flex: 1 }} />

				<TouchableOpacity
					style={[
						defaultStyles.pillButton,
						phoneNumber !== "" ? styles.enabled : styles.disabled,
						{ marginBottom: 20 },
					]}
					onPress={onSignUp}>
					<Text style={defaultStyles.buttonText}>Sign Up</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
};
const styles = StyleSheet.create({
	inputContainer: {
		marginVertical: 40,
		flexDirection: "row",
	},
	input: {
		backgroundColor: Colors.lightGray,
		padding: 20,
		borderRadius: 16,
		marginRight: 10,
	},
	enabled: {
		backgroundColor: Colors.primary,
	},
	disabled: {
		backgroundColor: Colors.primaryMuted,
	},
});

export default SignUp;
