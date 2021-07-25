type CompanyInfoContainerProps = {
  selectedTicker: string
}

const CompanyInfoContainer = ({ selectedTicker }: CompanyInfoContainerProps) => {
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