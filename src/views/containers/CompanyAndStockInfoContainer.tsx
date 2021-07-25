import { useParams } from 'react-router-dom';
import CompanyInfoContainer from './CompanyInfoContainer';
import StockInfoContainer from './StockInfoContainer';
import { companyInfoControllers } from '../../controllers/companyInfoController';

const CompanyAndStockInfoContainer = () => {
  let { ticker } = useParams<{ ticker: string}>();

  companyInfoControllers.getCompanyInfo(ticker)
    .then((res) => res.json())
    .then((res) => console.log(res));

  return (
    <div>
      {ticker}
      <CompanyInfoContainer />
      <StockInfoContainer />
    </div>
  )
}

export default CompanyAndStockInfoContainer;