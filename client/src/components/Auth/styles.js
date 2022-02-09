import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  paper: {
    marginTop: 64,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 16,
  },
  root: {
    "& .MuiTextField-root": {
      margin: 8,
    },
  },
  avatar: {
    margin: 8,
    backgroundColor: "main",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: 8,
  },
  submit: {
    margin: {
      top: 24,
      bottom: 16,
    },
  },
  googleButton: {
    marginBottom: 16,
  },
});
