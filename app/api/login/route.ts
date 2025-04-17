import { LoginRequest } from "@/types";
import { connection } from "next/server";

export async function POST(req: Request) {
	await connection()

	const rbody = await req.json()
	if (!rbody) {
		console.error("Invalid request body")
		return new Response("Invalid request body", { status: 400 })
	}

	const { username, password } = rbody
	if (!username || !password) {
		console.error("Invalid request body")
		return new Response("Invalid request body", { status: 400 })
	}

	const usersService = process.env.USERS_SERVICE
	if (!usersService) {
		console.error("USERS_SERVICE is not set")
		return new Response("Users service is unaccessible", { status: 500 })
	}

	const body: LoginRequest = {
		username,
		password,
	}

	const strBody = JSON.stringify(body)
	const res = await fetch(`${usersService}/auth/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: strBody,
	})
	const response = await res.text()

	return new Response((response), {
		status: res.status,
		headers: res.headers,
	})
}
