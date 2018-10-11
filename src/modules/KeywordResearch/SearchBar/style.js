import styled from 'react-emotion/macro'
import SearchMask from 'modules/KeywordResearch/SearchMask'
import CountryPicker from 'modules/KeywordResearch/CountryPicker'

export default component => styled(component)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 5px;

  ${SearchMask} {
    grid-column: 1/4;
  }

  ${CountryPicker} {
    justify-self: end;
  }

  input[type='text'] {
    grid-column: span 4;
  }

  label[for='exclude-permutations'] {
    grid-column: span 4;
    justify-self: end;
  }
`
