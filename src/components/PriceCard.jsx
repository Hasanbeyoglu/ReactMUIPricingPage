import {
  Button,
  Card,
  Divider,
  List,
  ListItem,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

const PriceCard = ({ name, desc, price, includes }) => {
  const theme = useTheme();

  const darkCard = name === "Business";

  return (
    <>
      <Card
        sx={{
          p: 3,
          borderRadius: "10px",
          color: darkCard ? theme.palette.accent.main : "#2C3140",
          bgcolor: darkCard ? "#2C3140" : theme.palette.accent.main,
        }}
      >
        <Stack direction="column" spacing={2}>
          <Stack
            direction="column"
            alignItems="center"
            className="break-words"
            spacing={1}
          >
            <Typography variant="h3" sx={{ fontSize: "1.5rem" }}>
              {name}
            </Typography>
            <Typography
              variant="h4"
              sx={{ fontSize: "4rem", fontWeight: "700" }}
            >
              €{price}
            </Typography>
            <Typography variant="body2" align="left">
              {desc}
            </Typography>
            <Button
              variant={darkCard ? "contained" : "outlined"}
              fullWidth
              sx={{
                border: !darkCard ? "3px solid #1465FA" : "none",
                textTransform: "capitalize",
                "&:hover": { border: !darkCard ? "3px solid #1465FA" : "none" },
              }}
            >
              Start My 15-day Trial
            </Button>
          </Stack>
          <Divider sx={{ width: 1 }} />
          <List>
            {includes.map((feature, index) => (
              <ListItem
                key={index}
                sx={{
                  px: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="body2">{feature}</Typography>
              </ListItem>
            ))}
          </List>
        </Stack>
      </Card>
    </>
  );
};

export default PriceCard;
