export const checkValidData = (email, password, fullName = null) => {
  if (!email || !password) {
    return "Email and password are required.";
  }
  if (!fullName && fullName !== null) {
    return "Full Name is required.";
  }

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/.test(password);
  const isNameValid = /^[A-Za-z]+(?:\s[A-Za-z]+)?$/.test(fullName);
  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";
  if (!isNameValid) return "Invalid Name";
  return null;
};
