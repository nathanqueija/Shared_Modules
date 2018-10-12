import styled from 'react-emotion/macro'
import ResultsTable from 'modules/KeywordResearch/ResultsTable'
import RelatedResults from 'modules/KeywordResearch/RelatedResults'

export default component => styled(component)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  grid-row-gap: 5px;
  overflow: scroll;

  h4 {
    margin: 0;
  }

  ${ResultsTable}, ${RelatedResults} {
    grid-column: span 2;
  }
`
