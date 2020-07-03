import * as React from "react";
import { Text, View, TextInput, Button, StyleSheet, TouchableOpacity, Platform, Alert } from "react-native";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import * as firebase from "firebase";
import { globalStyles } from "../styles/global";

const PhoneNumVeriScreen = ( props ) => {
    const recaptchaVerifier = React.useRef(null);
    const [phoneNumber, setPhoneNumber] = React.useState();
    const [verificationId, setVerificationId] = React.useState();
    const [verificationCode, setVerificationCode] = React.useState();
    const firebaseConfig = firebase.apps.length ? firebase.app().options : undefined;
    const [message, showMessage] = React.useState((!firebaseConfig || Platform.OS === 'web')
      ? { text: "To get started, provide a valid firebase config in App.js and open this snack on an iOS or Android device."}
      : undefined);

      var phoneNumberSend = async () => {
        try {
            const phoneProvider = new firebase.auth.PhoneAuthProvider();
            const verificationId = await phoneProvider.verifyPhoneNumber(
              phoneNumber,
              recaptchaVerifier.current
            );
            setVerificationId(verificationId);
            showMessage({
              text: "Verification code has been sent to your phone.",
            });
            firebase
              .database()
              .ref('/users/' + firebase.auth().currentUser.uid)
              .update({
                verified_phone_no: phoneNumber
            }).then(() => {
                Alert.alert('Information','User is Successfully verified')
            })
          } catch (err) {
            showMessage({ text: `Error: ${err.message}`, color: "red" });
          }
      }

      var phoneNumberUpload = async () => {
        try {
          const credential = firebase.auth.PhoneAuthProvider.credential(
            verificationId,
            verificationCode
          );
          console.log(credential)
          showMessage({ text: "Phone authentication successful 👍" });
          props.navigation.navigate('Selection')
        } catch (err) {
          showMessage({ text: `Error: ${err.message}`, color: "red" });
        }
      }

    return (
      <View style={globalStyles.body}>
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
        />
        <Text style={{ marginTop: 20,color:'#fff',fontSize:20,fontFamily:'nunito-bold' }}>Enter phone number</Text>
        <TextInput
          style={styles.textBox}
          placeholder="+91 999 999 9999"
          autoFocus
          autoCompleteType="tel"
          keyboardType="phone-pad"
          textContentType="telephoneNumber"
          onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
        />
        <Button
          title="Send Verification Code"
          disabled={!phoneNumber}
          onPress={phoneNumberSend}
        />
        <Text style={{ marginTop: 20,color:'#fff',fontSize:20,fontFamily:'nunito-bold' }}>Enter Verification code</Text>
        <TextInput
          style={styles.textBox}
          editable={!!verificationId}
          placeholder="123456"
          onChangeText={setVerificationCode}
        />
        <Button
          style={{fontFamily:'nunito-bold'}}
          title="Confirm Verification Code"
          disabled={!verificationId}
          onPress={phoneNumberUpload}
        />
        {message ? (
          <TouchableOpacity
            style={[StyleSheet.absoluteFill, styles.message ]}
            onPress={() => showMessage(undefined)}>
            <Text style={{color: message.color || "white", fontSize: 20, textAlign: "center", marginTop: 100,fontFamily:'nunito-bold' }}>
              {message.text}
            </Text>
          </TouchableOpacity>
        ) : undefined}
      </View>
    );
}

var styles = StyleSheet.create({
    textBox: { marginVertical: 10, fontSize: 17,fontFamily:'nunito-bold',color:'#fff' },
    message: { justifyContent: "center",fontFamily:'nunito-bold' },
})

export default PhoneNumVeriScreen

