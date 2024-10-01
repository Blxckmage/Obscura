export async function getUsers() {
	return fetch("/api/users").then((res) => res.json());
}

export async function getUserById(id: number) {
	return fetch(`/api/users/${id}`).then((res) => res.json());
}

export async function getUserByUsername(username: string) {
	return fetch(`/api/users/username/${username}`).then((res) => res.json());
}
