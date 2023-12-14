import { StyleSheet } from "react-native"

import { AppColor, FontSize } from "../utils/StyleConstants"

export default StyleSheet.create({
    heading: {
        fontSize: FontSize.heading,
        color: AppColor.black,
        textAlign: "center"
    },
    categoryView: {
        borderWidth: 2,
        borderColor: AppColor.lightGrey,
        borderRadius: 8,
    },
    catSeparator: {
        alignSelf: "center",
        width: "100%",
        borderWidth: 1,
        borderColor: AppColor.lightGrey
    }

})