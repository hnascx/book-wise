import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  marginTop: 65,

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  "> section": {
    display: "flex",
    flexDirection: "column",
    gap: "$3",
  }
})

