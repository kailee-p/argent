import { useState, useEffect } from 'react';
import { companyInfoControllers } from '../../controllers/companyInfoController';
import CompanyInfo from '../components/CompanyInfo';

type CompanyInfoContainerProps = {
  selectedTicker: string
}

const CompanyInfoContainer = ({ selectedTicker }: CompanyInfoContainerProps) => {  
  //state to hold company info returned from API; begins as null
  const [companyInfo, setCompanyInfo] = useState(null);

  //search for company info upon ticker change, if ticker is not empty string
  useEffect(() => {
    if (selectedTicker !== '') {
      companyInfoControllers.getCompanyInfo(selectedTicker)
      .then((res) => res.json())
      .then((res) => setCompanyInfo(res))
      .catch((err) => console.log('companyInfoControllers.getCompanyInfo ERROR: ', err));
    }
  }, [selectedTicker, setCompanyInfo])

  return (
    <div>
      <CompanyInfo 
        companyInfo={companyInfo}
      />
    </div>
  )
}
export default CompanyInfoContainer;