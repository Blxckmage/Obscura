import { auth } from "@/auth";

export default async function useSession() {
	const session = await auth();
	if (session?.user?.id === undefined) return null;
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}/users/${session?.user?.id as string}`,
		{
			headers: {
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
			},
		},
	);

	if (!response.ok) {
		return null;
	}

	return response.json();
}
