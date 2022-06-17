import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

const ActiveLastBreadcrumb = () => {
  return (
    <>
      <Card sx={{ minWidth: 275 }} className="breadCrumbsCard">
        <Grid item xs={12} lg={12}>
          <div>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                Home
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
              >
                Dashboard
              </Link>
            </Breadcrumbs>
          </div>
        </Grid>
      </Card>
    </>
  )
}

export default ActiveLastBreadcrumb
