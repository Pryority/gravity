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
import useFloat, { CurveType, FloatState } from "@/lib/hooks/use-float";
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
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Slider } from "./ui/slider";
import CurvePreview from "./CurvePreview";

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
  curveType: z.string(),
  curveRangeNum: z.number(),
});

export default function CurveForm() {
  const [float, setFloat] = useFloat();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      isRoyalties: false,
      newRoyalties: false,
      curveType: "linear",
      curveRangeNum: 20,
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
      <CurvePreview />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <Card className="w-full max-w-2xl">
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
                    <FormItem className="space-y-3">
                      {/* <FormLabel>Notify me about...</FormLabel> */}
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex space-x-6"
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
            </CardContent>
            <CardFooter>
              <Button type="submit" className="ml-auto">
                Float Token
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
}
