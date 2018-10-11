import styled from 'react-emotion/macro'

export default component => styled(component)`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 10px;
  height: 100%;

  h2 {
    font-size: 16px;
    margin: 0;
    font-weight: 300;
  }

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

  > :first-child {
    display: grid;
    grid-row-gap: 5px;
    grid-template-rows: auto auto 1fr;
  }

  > :nth-child(2) {
  }
`
