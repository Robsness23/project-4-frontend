export function loggedInUserId() {
  //! If there's no localStorage available, return false
  if (!localStorage) return false
  //! Get the token from localStorage
  const token = localStorage.getItem("token")
  // ! Checking to see if the token exists
  if (!token) return false
  // ! Now that I know there is a token if we get to line 9.
  // ! Below I am now getting the userId
  const middleSection = token.split('.')[1]
  const decodedStr = window.atob(middleSection)
  const decodedObj = JSON.parse(decodedStr)
  return decodedObj.sub
}

export function isCreator(userIdToCompare) {
  if (!userIdToCompare) return false
  return userIdToCompare === loggedInUserId()
}

export function loggedInEmail() {
  if (!localStorage) return false
  const email = localStorage.getItem("email")
  if (!email) return false
  return email
}

