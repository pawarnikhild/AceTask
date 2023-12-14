import { StyleSheet } from "react-native"

import { AppColor, FontSize } from "../utils/StyleConstants"

export default StyleSheet.create({
    inputHeading: {
        color: AppColor.black,
        fontSize: FontSize.large,
        fontWeight: "bold",
    },
    inputText: {
        marginVertical: 10,
    },
    imageAndButtonContainer: {
        margin: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    imagecontainer: {
        height: 90,
        width: 130,
        justifyContent: "center",
        alignItems: "center",
        borderStyle: 'dashed',
        borderWidth: 1,
        borderRadius: 1
    },
    chooseButton: {
        height: 46,
        width: "50%",
        borderRadius: 0
    }

})