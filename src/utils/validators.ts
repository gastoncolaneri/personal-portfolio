const emailRegex = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;

export const emailValidator = (email: string) => {
  if (emailRegex.test(email)) {
    return true;
  }
  return false;
};
