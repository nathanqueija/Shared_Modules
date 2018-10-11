import styled from 'react-emotion/macro'

export default component => styled(component)`
  display: grid;

  p {
    margin: 2px;
    span {
      font-weight: 700;
      text-transform: uppercase;
    }
  }

  > div {
    display: flex;
    max-width: 100%;
    overflow: scroll;
  }

  img {
    width: 80px;
    height: 80px;
    margin-right: 5px;
    cursor: pointer;
  }
`
