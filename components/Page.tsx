import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Page = ({
  children,
  classname,
}: {
  children: ReactNode;
  classname?: string;
}) => {
  return (
    <section
      className={cn(
        `flex min-h-screen w-full flex-col items-center`,
        classname,
      )}
    >
      {children}
    </section>
  );
};

export default Page;
