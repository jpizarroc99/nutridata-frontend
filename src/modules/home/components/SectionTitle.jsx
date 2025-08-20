import { Typography, Box } from "@mui/material";

export function SectionTitle({ title, subtitle }) {
  return (
    <Box textAlign="center" mb={4}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="body2" color="text.secondary">
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
