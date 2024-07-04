import FloatStepDots from "@/components/FloatStepDots";
import Page from "@/components/Page";
import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <Page>
      <div className="flex w-full flex-col items-center lg:max-w-6xl">
        <FloatStepDots />
        {children}
      </div>
    </Page>
  );
}
