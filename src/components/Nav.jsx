import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

const Nav = ({ nav }) => {
  const theme = useTheme();

  return (
    <>
      {nav.map((item, index) => ( 
        <Button
          key={index}
          sx={{ color: theme.palette.secondary.main, display: "block", textTransform: "capitalize", '&:hover': {color: theme.palette.primary.main}, fontWeight: 400, fontSize: "1rem"  }}
        >
          {item}
        </Button>
      ))}
    </>
  );
};

export default Nav;