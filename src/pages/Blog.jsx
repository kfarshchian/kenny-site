import React, { useEffect } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import {
  Container,
  Button,
  Stack,
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
} from "@mui/material";
import imgBlog from "../logos/blog-reverse-mortgage-utah.jpg";
import whereToGet from "../logos/where-to-get.jpg"
import whereToApply from "../logos/where-to-apply.jpg"
import whatAfford from "../logos/what-mortgage-afford.jpg"

function Austin() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ParallaxBanner
        title="reverse mortgage utah"
        id="reverse-mortgage-utah-blog"
        layers={[
          { image: imgBlog, speed: -20 },
          { image: imgBlog, speed: -10 },
        ]}
        className="aspect-[2/1]"
      >
        <div
          title="reverse mortgage utah"
          id="reverse-mortgage-utah-blog-title"
        >
          <h1 title="reverse mortgage utah" id="reverse-mortgage-utah-blog-h1">
            Reaping the Benefits of Reverse Mortgages<br></br>Securing Your
            Financial Future in Retirement
          </h1>
        </div>
      </ParallaxBanner>
      <Container maxWidth="md">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          id="reverse-mortgage-utah-home-Container-stack-card"
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
          spacing={{ xs: 1, sm: 2, md: 2 }}
        >
          {/* card 1 */}
          <Card sx={{ maxWidth: 345, minWidth:320 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={whereToGet}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Where to get a Reverse Mortgage?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                As of my last update in September 2021, reverse mortgages are
                available in several countries, including the United States,
                Canada...
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                title="reverse mortgage utah"
                href={
                  "/where-to-get-a-mortgage"
                }
                id="reverse-mortgage-utah-home-button-1"
                size="small"
              >
                Read it here
              </Button>
            </CardActions>
          </Card>
          {/* card 2 */}
          <Card sx={{ maxWidth: 345, minWidth:320 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={whereToApply}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                where to apply for a reverse mortgage?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                To apply for a reverse mortgage, you can follow these general
                steps: Research and compare lenders: Start by researching
                various lenders...
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                title="reverse mortgage utah"
                href={
                  "where-to-apply-for-a-mortgage"
                }
                id="reverse-mortgage-utah-home-button-1"
                size="small"
              >
                Read it here
              </Button>
            </CardActions>
          </Card>
          {/* card 3 */}
          <Card sx={{ maxWidth: 345, minWidth:320 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={whatAfford}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                What mortgage can I afford?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Determining what mortgage you can afford involves considering
                various financial factors to ensure you can comfortably manage
                your monthly payments and...
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                title="reverse mortgage utah"
                href={
                  "/how-much-mortgage-can-I-afford"
                }
                id="reverse-mortgage-utah-home-button-1"
                size="small"
              >
                Read it here
              </Button>
            </CardActions>
          </Card>
        </Stack>
      </Container>
    </>
  );
}

export default Austin;
