import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  root: {
    "& .MuiTextField-root": {
      margin: 8,
    },
  },
  paper: {
    padding: 16,
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 11,
  },
});
