import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

const UserActionButton = async () => {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signIn();
        }}
      >
        <Button
          variant="secondary"
          className="w-[20.5rem] text-2xl lg:w-28 lg:text-base"
          type="submit"
        >
          Sign In
        </Button>
      </form>
    </>
  );
};

export default UserActionButton;
