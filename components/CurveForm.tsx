"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useFloat, { CurveType, FloatState } from "@/lib/hooks/use-float";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Slider } from "./ui/slider";
import CurvePreview from "./CurvePreview";

const FormSchema = z.object({
  curveType: z.string(),
  curveRangeNum: z.number(),
  isCreatorMinting: z.boolean().default(false),
  totalSupply: z.number(),
  creatorInitialSupply: z.number(),
  startPrice: z.number(),
  endPrice: z.number(),
});

export default function CurveForm() {
  const [float, setFloat] = useFloat();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {},
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
    <div className="grid w-full gap-6 xl:grid-cols-2">
      <CurvePreview />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <Card>
            <CardHeader>
              <CardTitle>Float Curve Configuration</CardTitle>
              <CardDescription>
                Adjust the float settings or use a default curve.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex w-full flex-col items-center gap-1">
                <FormField
                  control={form.control}
                  name="curveType"
                  render={({ field }) => (
                    <FormItem className="w-full space-y-3">
                      {/* <FormLabel>Notify me about...</FormLabel> */}
                      <FormControl>
                        <RadioGroup
                          onValueChange={(e) => {
                            setFloat((p: FloatState) => ({
                              ...p,
                              curve: {
                                type: e as CurveType,
                                rangeNum: p.curve?.rangeNum ?? 20,
                              },
                            }));
                          }}
                          defaultValue={"exponential"}
                          className="grid w-full grid-cols-2 md:flex md:flex-row md:space-x-6"
                        >
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="linear" />
                            </FormControl>
                            <FormLabel className="cursor-pointer font-normal">
                              Linear
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="exponential" />
                            </FormControl>
                            <FormLabel className="cursor-pointer font-normal">
                              Exponential
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="logarithmic" />
                            </FormControl>
                            <FormLabel className="cursor-pointer font-normal">
                              Logarithmic
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="flat price" />
                            </FormControl>
                            <FormLabel className="cursor-pointer font-normal">
                              Flat Price
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="mt-4 flex w-full flex-col gap-4">
                <FormField
                  control={form.control}
                  name="curveRangeNum"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        {float.curve?.rangeNum} Price Fluctuation Ranges
                      </FormLabel>
                      <FormControl>
                        <Slider
                          defaultValue={[20]}
                          max={100}
                          step={1}
                          onValueChange={(val) => {
                            setFloat((p: FloatState) => ({
                              ...p,
                              curve: {
                                type: p.curve ? p.curve.type : "linear",
                                rangeNum: val[0],
                              },
                            }));
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="totalSupply"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Total Supply</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="69000000420"
                          {...field}
                          value={float.totalSupply ?? 69000000420}
                          onChange={(e) => {
                            setFloat((p: FloatState) => ({
                              ...p,
                              totalSupply: parseInt(e.target.value),
                            }));
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="creatorInitialSupply"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Creator Supply</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="42069"
                          {...field}
                          value={float.creatorSupply ?? ""}
                          onChange={(e) => {
                            setFloat((p: FloatState) => ({
                              ...p,
                              creatorSupply: parseInt(e.target.value),
                            }));
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="startPrice"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Starting Price</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="0.01"
                          {...field}
                          value={float.startPrice ?? ""}
                          onChange={(e) => {
                            setFloat((p: FloatState) => ({
                              ...p,
                              startPrice: parseFloat(e.target.value),
                            }));
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="endPrice"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ending Price</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="1"
                          {...field}
                          value={float.endPrice ?? ""}
                          onChange={(e) => {
                            setFloat((p: FloatState) => ({
                              ...p,
                              endPrice: parseFloat(e.target.value),
                            }));
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="ml-auto">
                Review Float
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
}
