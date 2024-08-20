import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
} from "react-native";
import React from "react";

interface PropsInput {
  label: string;
  value: string;
  onChange: (text: string) => void;
  type?: KeyboardTypeOptions;
  placeholder: string;
}

const Input = ({ label, value, onChange, placeholder, type }: PropsInput) => {
  return (
    <View style={styles.continer}>
      <Text style={styles.label}>
        {label} {""}
        {value.length === 0 && <Text style={styles.alert}>*</Text>}
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        keyboardType={type || "default"}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  continer: {
    width: "100%",
  },
  alert: {
    color: "red",
  },
  label: {
    fontSize: 12,
    paddingLeft: 2,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 8,
    
  },
});
