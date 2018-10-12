import styled from 'react-emotion/macro'

export default component => styled(component)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-row-gap: 5px;
`
