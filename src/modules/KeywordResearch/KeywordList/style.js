import styled from 'react-emotion/macro'
import ResultsTable from 'modules/KeywordResearch/ResultsTable'

export default component => styled(component)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr auto;

  ${ResultsTable} {
    grid-column: span 3;
  }

  td {
    padding: 5px 0;
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

  span {
    font-size: 12px;
    padding: 3px;
    border: 1px solid black;
    border-radius: 6px;
    &.included {
      background: lightgreen;
      border-color: #60a389;
    }

    &.not-included {
      background: #fbf2df;
      border-color: #dbc497;
    }
  }
`
