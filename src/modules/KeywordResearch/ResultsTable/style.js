import styled from 'react-emotion/macro'

export default component => styled(component)`
  min-height: 4em;
  max-height: 100%;
  overflow-y: auto;
  table {
    box-sizing: border-box;
    min-width: 100%;
  }

  tr:nth-child(even) {
    background-color: #c4e0ed;
  }
`
