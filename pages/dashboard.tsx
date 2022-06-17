import { Grid } from "@mui/material";
import BlogCard from "../src/components/dashboard/BlogCard";
import DailyActivity from "../src/components/dashboard/DailyActivity";
import ProductPerfomance from "../src/components/dashboard/ProductPerfomance";
import SalesOverview from "../src/components/dashboard/SalesOverview";

const Tables = () => {
  return (
    <Grid container spacing={0} className="marginTop">
      <Grid item xs={12} lg={12}>
        <SalesOverview />
      </Grid>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={4}>
        <DailyActivity />
      </Grid>
      <Grid item xs={12} lg={8}>a
        <ProductPerfomance />
      </Grid>
      <Grid item xs={12} lg={12}>
        <BlogCard />
      </Grid>
    </Grid>
  );
};

export default Tables;
