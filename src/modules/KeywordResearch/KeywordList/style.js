import styled from 'react-emotion/macro'
import ResultsTable from 'modules/KeywordResearch/ResultsTable'

export default component => styled(component)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr auto;

  ${ResultsTable} {
    grid-column: span 3;
  }

  > button {
    justify-self: center;
    margin: 10px;
    background: grey;
    color: white;
    border-radius: 4px;
    padding: 4px;
    cursor: pointer;
    outline: 0;
  }
`
