import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { useGetAllCountries } from "../hooks/useGetAllCountries";
import { useSearchCountries } from "../hooks/useSearchCountries";

const Home: NextPage = () => {
  const useStyles = makeStyles<Theme>(({ breakpoints: { width } }) => ({
    toolbar: {
      width: "100%",
      maxWidth: width("lg"),
      margin: "0 auto",
    },
    title: {
      fontWeight: "bold",
    },
  }));
  const classes = useStyles();

  const [
    { countries, fetching, error },
    searchCountries,
  ] = useSearchCountries();

  React.useEffect(() => {
    searchCountries({ criteria: "name", value: "india" });
  }, []);

  React.useEffect(() => {
    console.log(error, fetching, countries);
  }, [error, fetching, countries]);

  return (
    <div>
      <Head>
        <title>Countries App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <AppBar position="sticky" elevation={0}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h5" component="span" className={classes.title}>
              Countries
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg"></Container>
      </main>
    </div>
  );
};

export default Home;
