export async function getUsers() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`);

	if (!res.ok) {
		throw new Error(res.statusText);
	}

	return res.json();
}

export async function getUserById(id: number) {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`);

	if (!res.ok) {
		throw new Error(res.statusText);
	}

	return res.json();
}
