import styled from 'react-emotion/macro'

export default component => styled(component)`
  margin-top: 10px;
  position: relative;
  label {
    display: flex;
    flex-direction: column;
    input[type='text'] {
      box-sizing: border-box;
      width: 100%;
      height: 30px;
      margin-top: 5px;
      outline: 0;
    }

    textarea {
      resize: none;
      height: 150px;
    }
  }

  button[type='submit'] {
    background: gray;
    color: white;
    padding: 10px;
    font-weight: 700;
    outline: 0;
    cursor: pointer;
    bottom: 0;
    right: 0;
    float: right;
    margin: 10px 0;
  }
`
