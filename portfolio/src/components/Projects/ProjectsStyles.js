import { createUseStyles } from "react-jss";

// Create your Styles. Remember, since React-JSS uses the default preset,
// most plugins are available without further configuration needed.
export const useStyles = createUseStyles({
  img: {
    width: "100%",
    height: "100%",
    "object-fit": "cover",
    overflow: "hidden",
  },
  gridContainer: {
    display: "grid",
    "grid-template-columns": "repeat(auto-fill, minmax(400px, 1fr))",
    padding: "3rem",
    "place-items": "center",
    "column-gap": "2rem",
    "row-gap": "3rem",
  },
  blogCard: {
    " border-radius": "10px",
    "box-shadow": "3px 3px 20px rgba(80, 78, 78, 0.5)",
    "text-align": "center",
    width: "400px",
  },
  titleContent: {
    "text-align": "center",
    "z-index": 20,
    width: "100%",
  },
  headerThree: {
    "font-weight": 500,
    "letter-spacing": "2px",
    padding: "0.5rem 0",
  },
  hr: {
    width: "50px",
    height: "3px",
    margin: "20px auto",
    border: 0,
    background: "#d0bb57",
  },
  intro: {
    width: "170px",
    margin: "0 auto",
    "font-family": ["Droid Serif", "serif"],
    "font-size": "13px",
    "font-style": "italic",
    "line-height": "18px",
  },
});
