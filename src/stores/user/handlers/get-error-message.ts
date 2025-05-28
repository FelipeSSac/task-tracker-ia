const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === "object" && error !== null && "message" in error) {
    return String(error.message);
  }
  return "An internal error occurred. Please try again.";
};

export { getErrorMessage };