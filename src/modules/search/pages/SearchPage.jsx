import { Container } from "@mui/material";
import { useSearchParams } from "react-router";

export function SearchPage() {
  const [searchParams] = useSearchParams();

  return (
    <>
      <Container>
        <h1>Search Results Page</h1>
        <pre>{JSON.stringify(Object.fromEntries(searchParams), null, 2)}</pre>
      </Container>
    </>
  );
}
