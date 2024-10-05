import { User } from "@/types/user.types";

export async function handleSignup(data: User) {
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			throw new Error("Failed to create user");
		}

		return response;
	} catch (error) {
		throw error;
	}
}

export async function handleLogin(username: string, password: string) {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/authenticate/login`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ username, password }),
			},
		);

		console.log("Body: ", JSON.stringify({ username, password }));

		if (!response.ok) {
			throw new Error("Failed to login");
		}
		console.log("Response: ", response);

		return response;
	} catch (error) {
		throw error;
	}
}
