import { useQuery } from "@tanstack/react-query";

export function getUsers() {
	return useQuery({
		queryKey: ["users"],
		queryFn: () =>
			fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
				headers: {
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
				},
			}).then((res) => {
				return res.json();
			}),
	});
}

export function getUserById(id: string) {
	return useQuery({
		queryKey: ["users", id],
		queryFn: () =>
			fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/${id}`, {
				headers: {
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
				},
			}).then((res) => {
				return res.json();
			}),
	});
}
