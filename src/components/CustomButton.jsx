import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function CustomButton(props) {
  const { onClick, buttonText, linkTo } = props;

  return (
    <Link to={linkTo} style={{ textDecoration: "none" }}>
      <Button
        onClick={onClick}
        sx={{
          color: "#1253FF",
          fontSize: 16,
          fontWeight: "400",
          display: "block",
          textTransform: "capitalize",
          border: "solid",
          borderRadius: 0,
          borderWidth: 1,
          height: 48,
          width: { md: 124, lg: 164 },
          ":hover": {
            backgroundColor: "#1253FF",
            color: "#F2F2F2",
            borderColor: "#F2F2F2",
          },
        }}
      >
        {buttonText}
      </Button>
    </Link>
  );
}

export default CustomButton;
