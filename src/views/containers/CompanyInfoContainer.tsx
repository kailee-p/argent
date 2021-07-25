import { useEffect } from 'react';

import { companyInfoControllers } from '../../controllers/companyInfoController';

type CompanyInfoContainerProps = {
  selectedTicker: string
}

const CompanyInfoContainer = ({ selectedTicker }: CompanyInfoContainerProps) => {
  //search for company info upon ticker change, if ticker is not empty string
  useEffect(() => {
    if (selectedTicker !== '') {
      companyInfoControllers.getCompanyInfo(selectedTicker)
      .then((res) => res.json())
      .then((res) => console.log(res));
      // .catch((err) => console.log('companyInfoControllers.getCompanyInfo ERROR: ', err));
    }
  }, [selectedTicker])
  
  return (
    <div>
      { selectedTicker !== '' && (
        <div>
          {selectedTicker}
        </div>
      )}
      { selectedTicker === '' && (
        <div>
          You have not selected a company yet.
        </div>
      )}
    </div>
  )
}
export default CompanyInfoContainer;