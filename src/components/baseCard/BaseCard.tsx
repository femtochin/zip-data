import React from "react";

import {
  Card,
  CardContent,
  Box,
  Typography,
} from "@mui/material";


type Props = {
    title: string,
    children: JSX.Element,
}

const BaseCard = ({title, children}: Props) => {
  return (
    <Card>
      <Box p={2} display="flex" alignItems="center">
        <Typography variant="h4">{title}</Typography>
      </Box>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

export default BaseCard
