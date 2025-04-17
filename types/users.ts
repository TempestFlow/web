import { components } from "@/api/users"

export type LoginRequest = components["schemas"]["auth.v1.LoginRequest"]
export type LoginResponse = components["schemas"]["auth.v1.LoginResponse"]

export type LogoutRequest = components["schemas"]["auth.v1.LogoutRequest"]
export type LogoutResponse = components["schemas"]["auth.v1.LogoutResponse"]

export type RefreshRequest = components["schemas"]["auth.v1.RefreshRequest"]
export type RefreshResponse = components["schemas"]["auth.v1.RefreshResponse"]

export type SignupRequest = components["schemas"]["auth.v1.SignupRequest"]
export type SignupResponse = components["schemas"]["auth.v1.SignupResponse"]

export type ValidateRequest = components["schemas"]["auth.v1.ValidateRequest"]
export type ValidateResponse = components["schemas"]["auth.v1.ValidateResponse"]
