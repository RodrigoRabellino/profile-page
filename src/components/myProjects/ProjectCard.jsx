import { Grid, Card, CardMedia, CardHeader, CardActions, Button, Typography } from "@mui/material";

const MyProjectCard = ({ project }) => {
  return (
    <Grid item lg="auto">
      <Card
        elevation={0}
        sx={{
          width: "250px",
          p: "5px",
          transition: "0.4s",
          ":hover": {
            transition: "0.4s",
          },
        }}
      >
        <CardMedia
          sx={{
            height: "200px",
            width: "100%",
            borderRadius: "15px",
            overflow: "hidden",
          }}
          image={project.image}
        />
        <CardHeader
          sx={{ p: "0", px: "0" }}
          title={
            <Typography color="CaptionText" fontWeight="700" variant="h6">
              {project.name}
            </Typography>
          }
          subheader={
            <>
              <Typography variant="caption" color="CaptionText">
                {project.desc}
              </Typography>
            </>
          }
        />
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Button onClick={() => window.open(project.gitHubUrl, "_blank")}>
            View Code
          </Button>
          <Button
            disabled={project.liveDemo === "" ? true : false}
            variant="outlined"
            onClick={() => window.open(project.liveDemo, "_blank")}
          >
            Live Demo
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default MyProjectCard;
