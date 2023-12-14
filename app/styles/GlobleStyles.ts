import { StyleSheet } from "react-native";

import { AppColor, FontSize } from "../utils/StyleConstants";

export default StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: AppColor.white,
        paddingVertical: 10,
        paddingHorizontal: 12,
    },
    pageHeading: {
        fontSize: FontSize.heading,
        color: AppColor.black,
        textAlign: "center",
        fontWeight: "bold",
        marginVertical: 20
    }
});