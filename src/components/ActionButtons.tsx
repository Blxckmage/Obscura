import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from "./ui/sheet";

const ActionButton = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>WOOOWW</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        {/* <div className="grid gap-4 py-4"> */}
        {/*   <div className="grid grid-cols-4 items-center gap-4">Name</div> */}
        {/*   <div className="grid grid-cols-4 items-center gap-4">Username</div> */}
        {/* </div> */}
      </SheetContent>
    </Sheet>
  );
};

export default ActionButton;
