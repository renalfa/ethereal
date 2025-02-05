import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";

interface Props {
  data: { label: string; href: string }[];
  handleClick: (href: string) => void;
}

const MobileMenu = ({ data, handleClick }: Props) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col gap-2 mt-6">
          {data.map((item, i) => (
            <SheetClose key={i} asChild>
              <Button
                onClick={() => handleClick(item.href)}
                variant="outline"
                className="uppercase"
              >
                {item.label}
              </Button>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
