import FloatStepDots from "@/components/FloatStepDots";
import Page from "@/components/Page";
import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <Page>
      <FloatStepDots />
      {children}
    </Page>
  );
}
