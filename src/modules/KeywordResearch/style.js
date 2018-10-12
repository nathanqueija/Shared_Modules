import styled from 'react-emotion/macro'

export default component => styled(component)`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 10px;
  height: 100%;

  > * {
    box-sizing: border-box;
    border: 1px solid rgba(179, 179, 179, 0.5);
    border-radius: 6px;
    background: white;
    padding: 5px;
    min-height: 100%;
    max-height: 100%;
    overflow: scroll;
  }
`
