"use server";
import { signIn } from "@/auth";
import { User } from "@/types/user.types";

export async function handleSignup(data: User) {
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			throw new Error("Failed to create user");
		}

		return JSON.parse(await response.text());
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message);
		}
	}
}

export async function handleLogin(formData: FormData) {
	try {
		const response = await signIn("credentials", {
			username: formData.get("username") as string,
			password: formData.get("password") as string,
			redirect: false,
		});

		return response;
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message);
		}
	}
}

export async function authenticate(username: string, password: string) {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/authenticate/login`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
				},
				body: JSON.stringify({ username, password }),
			},
		);

		if (!response.ok) {
			throw new Error("Failed to login");
		}

		return response;
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(error.message);
		}
	}
}
