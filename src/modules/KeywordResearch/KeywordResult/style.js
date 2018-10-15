import styled from 'react-emotion/macro'

export default component => styled(component)`
  button {
    color: white;
    cursor: pointer;
    font-weight: 700;
    outline: none;

    border: 1px solid gray;

    :disabled {
      opacity: 0.3;
    }
  }
  button:first-child {
    background: tomato;
  }
  button:last-child {
    background: lightgreen;
  }
`
