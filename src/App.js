import { Container, Stack, Typography } from "@mui/material";
import PriceCard from "./components/PriceCard";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { content, packages } from "./data";
import Header from "./components/Header";
import React, { useMemo, useState } from "react";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import PriceSwitch from "./components/PriceSwitch";
import { Helmet } from "react-helmet";

function App() {
  const [billing, setBilling] = useState("Yearly");

  const prices = useMemo(
    () =>
      packages.map((item) => ({
        ...item,
        price:
          billing === "Monthly" ? Math.floor(item.price * 1.2) : item.price,
      })),
    [billing]
  );

  const handlePriceChange = (event) => {
    setBilling(event.target.checked ? "Monthly" : "Yearly");
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Helmet>
          <title>SocialNest</title>
          <meta name="description" content="SocialNest Price Page" />
        </Helmet>
        <Header logo={content.companyName} nav={content.navItems} />
        <Container maxWidth="md" sx={{ py: 3 }}>
          <Stack direction="column" spacing={5}>
            <Typography
              variant="h1"
              sx={{ fontSize: "3rem", fontWeight: 900, textAlign: "center" }}
            >
              {content.pageTitle}
            </Typography>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={3}
              alignItems="center"
              justifyContent="space-evenly"
            >
              {content.features.map((item, index) => {
                return (
                  <Stack key={index} direction="row" spacing={1}>
                    <CheckOutlinedIcon
                      sx={{ color: theme.palette.primary.main }}
                    />
                    <Typography variant="body1">{item}</Typography>
                  </Stack>
                );
              })}
            </Stack>
            <PriceSwitch setPrice={handlePriceChange} checkStatus={billing} />
            <Stack direction={{ xs: "column", sm: "row" }} spacing={4}>
              {prices.map((item) => {
                return (
                  <PriceCard
                    key={item.id}
                    name={item.name}
                    desc={item.desc}
                    price={item.price}
                    includes={item.includes}
                  />
                );
              })}
            </Stack>
          </Stack>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
