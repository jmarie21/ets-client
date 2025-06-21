import { jwtDecode } from "jwt-decode";

export default defineNuxtRouteMiddleware(() => {
  const token = useCookie("token").value;

  if (!token) {
    return navigateTo("/login");
  }

  try {
    const decoded: any = jwtDecode(token);
    const now = Date.now() / 1000;
    if (decoded.exp && decoded.exp < now) {
      localStorage.removeItem("token");
      return navigateTo("/login");
    }
  } catch (err) {
    localStorage.removeItem("token");
    return navigateTo("/login");
  }
});
