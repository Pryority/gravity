"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useFloat, { FloatState } from "@/lib/hooks/use-float";
import { Switch } from "@/components/ui/switch";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import FloatPreview from "./FloatPreview";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Checkbox } from "./ui/checkbox";
import RoyaltyTooltip from "./float/RoyaltyTooltip";
import Link from "next/link";

const tokens = [
  { name: "Wrapped Ether", ticker: "WETH" },
  { name: "Optimism", ticker: "OP" },
  { name: "DEGEN", ticker: "DEGEN" },
  { name: "Enjoy", ticker: "ENJOY" },
];

const FormSchema = z.object({
  isRoyalties: z.boolean().default(false),
  newRoyalties: z.boolean().default(false),
  mintRoyalty: z.number().optional(),
  burnRoyalty: z.number().optional(),
  website: z.string().optional(),
  x: z.string().optional(),
  telegram: z.string().optional(),
});

export default function FloatForm() {
  const [float, setFloat] = useFloat();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      isRoyalties: false,
      newRoyalties: false,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
  }
  return (
    <div className="grid w-full gap-6 md:grid-cols-2">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <CardTitle>Submit Token Information</CardTitle>
              <CardDescription>
                Fill out the form to provide details about your new token.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex w-full flex-col items-center gap-1">
                <Tabs
                  defaultValue="ERC-20"
                  className="w-full"
                  onValueChange={(value) => {
                    setFloat((p: FloatState) => ({
                      ...p,
                      erc: value as "ERC-20" | "ERC-1155",
                    }));
                  }}
                >
                  <TabsList className="h-16 w-full">
                    <TabsTrigger
                      value="ERC-20"
                      className="w-full min-w-[128px]"
                    >
                      Fungible Token <br />
                      (ERC-20)
                    </TabsTrigger>
                    <TabsTrigger
                      value="ERC-1155"
                      className="w-full min-w-[128px]"
                    >
                      NFT <br />
                      (ERC-1155)
                    </TabsTrigger>
                  </TabsList>
                  <TabsContent value="account">
                    Make changes to your account here.
                  </TabsContent>
                  <TabsContent value="password">
                    Change your password here.
                  </TabsContent>
                </Tabs>
              </div>
              <div className="mt-4 flex w-full flex-col gap-4">
                <Label htmlFor="name">Choose a Base Asset</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Wrapped Ether (WETH)" />
                  </SelectTrigger>
                  <SelectContent>
                    {tokens.map((t) => (
                      <SelectItem
                        key={t.ticker}
                        value={t.ticker}
                      >{`${t.name} (${t.ticker})`}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">
                    {float.erc === "ERC-20" ? "Token" : "NFT"} Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter token name"
                    value={float.name ?? ""}
                    onChange={(e) => {
                      setFloat((p: FloatState) => ({
                        ...p,
                        name: e.target.value,
                      }));
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="symbol">
                    {float.erc === "ERC-20" ? "Token" : "NFT"} Symbol
                  </Label>
                  <Input
                    id="symbol"
                    placeholder="Enter token symbol"
                    value={float.symbol ?? ""}
                    onChange={(e) => {
                      setFloat((p: FloatState) => ({
                        ...p,
                        symbol: e.target.value,
                      }));
                    }}
                  />
                </div>
              </div>
              <div className="my-6 flex w-full flex-col gap-4 rounded-lg border p-3">
                <FormField
                  control={form.control}
                  name="isRoyalties"
                  render={({ field }) => (
                    <FormItem
                      onChange={() => {
                        console.log("change");
                        setFloat((p: FloatState) => ({
                          ...p,
                          isRoyalties: field.value ? true : false,
                        }));
                      }}
                      className="flex flex-row items-center justify-between"
                    >
                      <div className="space-y-0.5">
                        <FormLabel>
                          Creator Royalties <RoyaltyTooltip />
                        </FormLabel>
                        <FormDescription>
                          Earn fees from each mint or burn.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={
                            float.isRoyalties ? float.isRoyalties : field.value
                          }
                          onCheckedChange={field.onChange}
                          onClick={() =>
                            setFloat((p: FloatState) => ({
                              ...p,
                              isRoyalties: float.isRoyalties ? false : true,
                            }))
                          }
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                {float.isRoyalties ? (
                  <>
                    <FormField
                      control={form.control}
                      name="newRoyalties"
                      render={({ field }) => (
                        <FormItem
                          onChange={() => {
                            console.log("change");
                            setFloat((p: FloatState) => ({
                              ...p,
                              newRoyalties: field.value ? true : false,
                            }));
                          }}
                          className="my-4 flex w-full flex-col gap-4"
                        >
                          <FormControl>
                            <div className="items-top flex space-x-2">
                              <Checkbox
                                checked={
                                  float.newRoyalties
                                    ? float.newRoyalties
                                    : field.value
                                }
                                onCheckedChange={field.onChange}
                                onClick={() =>
                                  setFloat((p: FloatState) => ({
                                    ...p,
                                    newRoyalties: float.newRoyalties
                                      ? false
                                      : true,
                                  }))
                                }
                              />
                              <div className="grid gap-1.5 leading-none">
                                <Label
                                  htmlFor="newRoyalties"
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  Change default royalties for minting and
                                  burning
                                </Label>
                              </div>
                            </div>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    {float.newRoyalties && (
                      <div className="grid w-full grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="mintRoyalty"
                          render={({ field }) => (
                            <FormItem>
                              <div className="flex flex-col gap-2">
                                <Label htmlFor="mintRoyalty">Mint</Label>
                                <FormControl>
                                  <Input
                                    defaultValue={"0.3%"}
                                    placeholder="Enter percentage..."
                                    {...field}
                                  />
                                </FormControl>
                              </div>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="burnRoyalty"
                          render={({ field }) => (
                            <FormItem>
                              <div className="flex flex-col gap-2">
                                <Label htmlFor="burnRoyalty">Burn</Label>
                                <FormControl>
                                  <Input
                                    defaultValue={"0.3%"}
                                    placeholder="Enter percentage..."
                                    {...field}
                                  />
                                </FormControl>
                              </div>
                            </FormItem>
                          )}
                        />
                      </div>
                    )}
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="launch-amount">Launch Amount (ETH)</Label>
                  <Input id="launch-amount" type="number" placeholder="0.0" />
                </div>
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Website</FormLabel>
                        <FormControl>
                          <Input
                            type="url"
                            placeholder="https://example.com"
                            {...field}
                            value={float.website ?? ""}
                            onChange={(e) => {
                              setFloat((p: FloatState) => ({
                                ...p,
                                website: e.target.value,
                              }));
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="x"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>X</FormLabel>
                        <FormControl>
                          <Input
                            type="url"
                            placeholder="@username"
                            {...field}
                            value={float.x ?? ""}
                            onChange={(e) => {
                              setFloat((p: FloatState) => ({
                                ...p,
                                x: e.target.value,
                              }));
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="telegram"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telegram</FormLabel>
                        <FormControl>
                          <Input
                            type="url"
                            placeholder="@username"
                            {...field}
                            value={float.telegram ?? ""}
                            onChange={(e) => {
                              setFloat((p: FloatState) => ({
                                ...p,
                                telegram: e.target.value,
                              }));
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Provide a brief description"
                  className="min-h-[100px]"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="image">Token Image</Label>
                  <Input id="image" type="file" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="total-supply">Total Supply</Label>
                  <Input id="total-supply" type="number" placeholder="0" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="first-buy">First Buy on Deploy (ETH)</Label>
                <Input id="first-buy" type="number" placeholder="0.0" />
              </div>
            </CardContent>
            <CardFooter>
              <Link href={"/float/curve"}>
                <Button type="submit" className="ml-auto">
                  Finalize Float
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </form>
      </Form>
      <FloatPreview />
    </div>
  );
}
