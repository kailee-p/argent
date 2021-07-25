import { Container, Grid } from '@material-ui/core';

const CompanyAndStockInfoContainer = () => {
  console.log('company info container rendered');

  return (
    <Container>
      <Grid container spacing={6}>
        Company Info
      </Grid>
      <Grid container spacing={6}>
        Stock Info
      </Grid>
    </Container>
  )
}

export default CompanyAndStockInfoContainer;