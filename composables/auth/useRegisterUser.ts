export const useRegisterUser = async (payload: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) => {
  try {
    const { data, error } = await useFetch(
      "http://localhost:5198/api/auth/register",
      {
        method: "POST",
        body: payload,
      }
    );

    if (error.value) {
      throw error.value;
    }

    return data.value;
  } catch (error) {
    console.error("Registration failed:", error);
    throw error;
  }
};
