import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import burger from "../../assets/burger.svg";
import minilogo from "../../assets/minilogo.svg";
import arrow from "../../assets/arrowUpRightWhite.svg";

export default function SheetDemo() {
  return (
    <Sheet key={"top"}>
      <SheetTrigger>
        <img className="block size-8 lg:hidden" src={burger.src} />
      </SheetTrigger>
      <SheetContent side={"top"} className="w-full text-white">
        <SheetHeader className="h-full">
          <SheetDescription className="flex flex-col justify-center px-4 pt-6 text-white">
            <div className="flex flex-col gap-6 font-medium *:cursor-pointer lg:flex">
              <div className="flex items-center gap-2 px-4 hover:bg-white/10">
                <div className="flex size-6 items-center justify-center rounded-full border border-[#ffffff1f] bg-white/10">
                  <img className="size-4" src={minilogo.src} />
                </div>

                <div>$DRAKE Token</div>
              </div>

              <div className="w-fit px-4 hover:bg-white/10">Nodes</div>

              <div className="flex items-center gap-2 px-4 hover:bg-white/10">
                <div>Build with DRAKE</div>

                <img className="size-5" src="/images/dropdown.svg" />
              </div>

              <div className="pt-[10px]">
                <button className="group flex w-full items-center justify-center gap-1.5 rounded-xl bg-gradient-to-l from-[#889CDF] to-[#515c8a] py-[10px] text-sm text-white hover:opacity-80 lg:hidden">
                  Launch App
                  <img
                    className="size-4 stroke-2 transition group-hover:rotate-45"
                    src={arrow.src}
                  />
                </button>
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
