import { Button } from "@mui/material";

function CustomButton(props) {
  const { label, onClick } = props;
  return (
    <Button
      onClick={onClick}
      key={label}
      sx={{
        color: "#1253FF",
        fontSize: "1.1rem",
        fontWeight: "400",
        display: "block",
        textTransform: "capitalize",
        border: "solid",
        borderRadius: "0",
        borderWidth: "0.05rem",
        height: "2.8rem",
        marginX: "1rem",
        width: "10rem",
        ":hover": {
          backgroundColor: "#1253FF",
          color: "#F2F2F2",
          borderColor: "#F2F2F2",
        },
      }}
    >
      {label}
    </Button>
  );
}

export default CustomButton;
