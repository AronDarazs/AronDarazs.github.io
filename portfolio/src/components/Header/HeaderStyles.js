import { createUseStyles } from "react-jss";

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
export const useStyles = createUseStyles({
  headerContainer: {
    display: "grid",
    "grid-template-columns": "repeat(5, 1fr)",
    "grid-template-rows": "1fr",
    "grid-column-gap": "2rem",
    padding: "1rem",
    "padding-top": "2rem",
  },
  headerWrapper: {
    "grid-area": "1 / 1 / 2 / 2",
    display: "flex",
    "flex-direction": "row",
    "align-content": "center",
  },

  headerMenupoints: {
    "grid-area": "1 / 2 / 2 / 4",
    display: "flex",
    "justify-content": "space-around",
  },

  navLink: {
    "font-size": "2rem",
    "line-height": "32px",

    transition: "0.4s ease",
    a: {
      "text-decoration": "none",
    },
    "&:hover": {
      color: "#fff",
      opacity: 1,
      cursor: "pointer",
    },
  },
});

// Define the component using these styles and pass it the 'classes' prop.
// Use this to assign scoped class names.
