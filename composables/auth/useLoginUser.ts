interface LoginResponse {
  token: string;
}

export const useLoginUser = async (payload: {
  email: string;
  password: string;
}): Promise<LoginResponse> => {
  try {
    const { data, error } = await useFetch<LoginResponse>(
      "http://localhost:5198/api/auth/login",
      {
        method: "POST",
        body: payload,
      }
    );

    if (error.value) throw error.value;

    if (!data.value) throw new Error("No data returned from login");

    return data.value;
  } catch (error) {
    console.error("Error logging in: ", error);
    throw error;
  }
};
