import {
  Button,
  Chip,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Paragraph from "./Paragraph";
import dm from "../../assets/DM1.pdf";

const CompetitionSpecialPart = (props) => {
  const {
    ideaTitle = "",
    description = "",
    projectType = "",
    usedTechnologies = [],
  } = props;
  return (
    <>
      <Typography variant="h6">Title: {ideaTitle}</Typography>
      <Paragraph
        paragraphTitle={"Project Type: " + projectType}
        paragraphText={"Description: " + description}
      />
      <Divider sx={{ marginY: 2 }} />
      <Typography variant="h6">Used Technologies</Typography>
      <Stack direction="row" spacing={1}>
        {usedTechnologies.map((technologie, index) => (
          <Chip
            key={technologie + index}
            label={technologie}
            color="secondary"
            variant="filled"
          />
        ))}
      </Stack>
    </>
  );
};
//<embed src={dm} width="800px" height="2100px" />

const TrainingSpecialPart = (props) => {
  const [isDownloading, setIsDownLoading] = useState(false);
  const handleDownloadCV = () => {
    setIsDownLoading(true);
    setTimeout(() => setIsDownLoading(false), 200);
  };
  const {
    birthdate = "",
    cv = dm,
    comment = "",
    address = "",
    postalCode = "",
    role = "",
  } = props;
  return (
    <>
      <Typography>Role: {role} </Typography>
      <Divider sx={{ marginY: 2 }} />
      <Typography>Birthdate: {new Date(birthdate).toDateString()} </Typography>
      <Divider sx={{ marginY: 2 }} />
      <Typography>Address: {address} </Typography>
      <Divider sx={{ marginY: 2 }} />
      <Typography>Postal Code: {postalCode} </Typography>
      <Paragraph paragraphText={comment} paragraphTitle="Comment: " />
      <Divider sx={{ marginY: 2 }} />
      <Button color="secondary" variant="contained" onClick={handleDownloadCV}>
        Download CV
      </Button>
      {isDownloading && <embed width="0px" height="0px" src={cv} />}
    </>
  );
};

const ApplicationsArticle = ({
  isCompetition,
  competitionData,
  trainingData,
}) => {
  const [applicationData, setApplicationData] = useState({});

  useEffect(() => {
    isCompetition
      ? setApplicationData(competitionData)
      : setApplicationData(trainingData);
  }, [isCompetition, competitionData, trainingData]);

  const { postDate, firstName, secondName, email, phoneNumber } =
    applicationData;

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        paddingX: 4,
        "& > :not(style)": {
          m: 1,
        },
      }}
    >
      <Paper elevation={3} sx={{ padding: 2 }}>
        <Typography>
          {" "}
          Post date: {new Date(postDate).toDateString()}{" "}
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Grid container spacing={2}>
          <Grid item>
            <Typography>Name: {firstName + " " + secondName}</Typography>
          </Grid>
          <Grid item>
            <Typography>Email: {email}</Typography>
          </Grid>
          <Grid item>
            <Typography>Phone Number: {phoneNumber}</Typography>
          </Grid>
        </Grid>
        <Divider sx={{ marginY: 2 }} />
        {isCompetition ? (
          <CompetitionSpecialPart {...applicationData} />
        ) : (
          <TrainingSpecialPart {...applicationData} />
        )}
      </Paper>
    </Box>
  );
};

export default ApplicationsArticle;
