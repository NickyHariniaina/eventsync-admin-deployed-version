import type { AuthProvider } from "react-admin"

export const authProvider: AuthProvider = {
  login: async ({ username, password }) => {
    const response = await fetch("http://localhost:3000/api/auth/sign-in/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email: username,
        password: password,
      }),
    })

    if (!response.ok) {
      throw new Error("Email ou mot de passe incorrect")
    }

    const data = await response.json()
    localStorage.setItem("user", JSON.stringify(data.user))
    return Promise.resolve()
  },

  logout: async () => {
    await fetch("http://localhost:3000/api/auth/sign-out", {
      method: "POST",
      credentials: "include",
    })
    localStorage.removeItem("user")
    return Promise.resolve()
  },

  checkAuth: async () => {
    const response = await fetch("http://localhost:3000/api/auth/get-session", {
      credentials: "include",
    })
    const session = await response.json()
    if (!session) return Promise.reject()
    return Promise.resolve()
  },

  checkError: async (error) => {
    if (error.status === 401) return Promise.reject()
    return Promise.resolve()
  },

  getIdentity: async () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}")
    return Promise.resolve({
      id: user.id,
      fullName: user.name,
    })
  },

  getPermissions: () => Promise.resolve("admin"),
}