import { signIn } from "@/auth";

export default function LoginPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Login</h1>
      <form
        className="flex flex-col items-center justify-center"
        action={async (formData) => {
          "use server";
          await signIn("credentials", formData);
        }}
      >
        <input
          className="m-2 rounded border border-gray-300 p-2"
          type="text"
          name="username"
          placeholder="Username"
        />
        <input
          className="m-2 rounded border border-gray-300 p-2"
          type="password"
          name="password"
          placeholder="Password"
        />
        <button
          className="m-2 rounded border border-gray-300 p-2"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
