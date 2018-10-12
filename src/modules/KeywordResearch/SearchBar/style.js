import styled from 'react-emotion/macro'

export default component => styled(component)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 5px;

  input[type='text'] {
    grid-column: span 4;
  }

  label[for='exclude-permutations'] {
    grid-column: span 4;
    justify-self: end;
  }
`
