import { jwtDecode } from "jwt-decode";

export default defineNuxtRouteMiddleware(() => {
  try {
    const token = useCookie("token");

    if (!token.value) {
      return navigateTo("/login");
    }
    if (!token.value) {
      const decoded: any = jwtDecode(token.value);
      const now = Date.now() / 1000;

      if (decoded.exp && decoded.exp < now) {
        token.value = null;
        return navigateTo("/login");
      }
    }
  } catch (err) {
    console.error("Error in auth middleware:", err);
    return navigateTo("/login");
  }
});
