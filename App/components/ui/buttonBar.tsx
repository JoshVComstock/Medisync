import { View, StyleSheet, Pressable } from "react-native";
import React from "react";
import colors from "./colors";
import { cards } from "../../app/pages/seccions/secciones";
import { FontAwesome } from "@expo/vector-icons";
import { router, usePathname } from "expo-router";

const ButtonBar = () => {
  const pathname = usePathname();

  const navigate = (path: string): void => {
    router.push(path);
  };

  return (
    <View style={styles.navContain}>
      {cards.map((card, index) => {
        const isActive = pathname === card.path;
        return (
          <Pressable
            style={[
              styles.contentIcon,
              index === cards.length - 1 && styles.lastIcon,
            ]}
            onPress={() => navigate(card.path)}
            key={card.id}
          >
            <FontAwesome
              name={card.icon}
              size={24}
              color={isActive ? colors.primary : colors.textLite}
              style={{
                backgroundColor: isActive ? colors.acent : "transparent",
                padding: isActive ? 4 : 0,
                borderRadius: isActive ? 4 : 0,
              }}
            />
          </Pressable>
        );
      })}
    </View>
  );
};

export default ButtonBar;

const styles = StyleSheet.create({
  navContain: {
    position: "absolute",
    bottom: 20,
    width: "70%",
    borderWidth: 1,
    height: 50,
    borderRadius: 100,
    justifyContent: "space-around",
    alignItems: "center",
    borderColor: colors.primary,
    backgroundColor: colors.primary,
    flexDirection: "row",
  },
  contentIcon: {
    width: "33%",
    justifyContent: "center",
    alignItems: "center",
    borderRightWidth: 1,
    borderColor: colors.textLite,
  },
  lastIcon: {
    borderRightWidth: 0,
  },
  activeIcon: {
    // backgroundColor: colors.textLite,
    // width: "33%",
    // height: 30,
    padding: 8,
    borderRadius: 4,
  },
});
