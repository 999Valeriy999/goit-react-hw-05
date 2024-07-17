import React from 'react'
const ErrorMessage = ({message = "Sorry, an error occurred, please try again later"}) => {
  return (
    <S.Message>{message}</S.Message>
  )
}

export default ErrorMessage