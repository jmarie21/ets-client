import { jwtDecode } from "jwt-decode";

interface ValidateResponse {
  isValid: boolean;
  [key: string]: any;
}

export default defineNuxtRouteMiddleware(async () => {
  try {
    const token = useCookie("token");

    if (!token.value) {
      return navigateTo("/login");
    }
    // if (!token.value) {
    //   const decoded: any = jwtDecode(token.value);
    //   const now = Date.now() / 1000;

    //   if (decoded.exp && decoded.exp < now) {
    //     token.value = null;
    //     return navigateTo("/login");
    //   }
    // }

    const { data, error } = await useFetch<ValidateResponse>(
      "http://localhost:5198/api/auth/validate",
      {
        method: "POST",
        body: { token: token.value },
      }
    );

    if (error.value || !data.value?.isValid) {
      useCookie("token").value = null;
      return navigateTo("/login");
    }
  } catch (err) {
    console.error("Error in auth middleware:", err);
    return navigateTo("/login");
  }
});
