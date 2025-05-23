import { Button } from "@/components/shadcn/ui/button";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter
} from "@/components/shadcn/ui/card";
import { Input } from "@/components/shadcn/ui/input";
import { Label } from "@/components/shadcn/ui/label";
import { Switch } from "@/components/shadcn/ui/switch";

export default function Page() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="mx-auto max-w-md">
          <Card>
            <CardHeader>
              <CardTitle className="text-base font-semibold">
                <span className="capitalize">
                  excess coin details - BTC
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 grid-cols-12">
              <div className="col-span-6">
                <div className="space-y-1">
                  <Label className="text-xs font-semibold">
                    <span className="capitalize">total coins (wallet + vendor)</span>
                  </Label>
                  <Input disabled
                    type="text"
                    defaultValue="0.5"
                    className="p-3 h-auto w-full font-semibold !text-xs"
                  />
                </div>
              </div>
              <div className="col-span-6">
                <div className="space-y-1">
                  <Label className="text-xs font-semibold">
                    <span className="capitalize">current rate</span>
                  </Label>
                  <Input disabled
                    type="text"
                    defaultValue="US $62,500.00"
                    className="p-3 h-auto w-full font-semibold !text-xs"
                  />
                </div>
              </div>
              <div className="col-span-12">
                <div className="space-y-1">
                  <Label className="text-xs font-semibold">
                    <span className="capitalize">capital coin</span>
                  </Label>
                  <Input disabled
                    type="text"
                    defaultValue="0.3"
                    className="p-3 h-auto w-full font-semibold !text-xs"
                  />
                </div>
              </div>
              <div className="col-span-12">
                <div className="space-y-1">
                  <Label className="text-xs font-semibold">
                    <span className="capitalize">excess coin</span>
                  </Label>
                  <Input disabled
                    type="text"
                    defaultValue="0.20000000"
                    className="p-3 h-auto w-full font-semibold !text-xs"
                  />
                </div>
              </div>
              <div className="col-span-12">
                <div className="space-y-1">
                  <Label className="text-xs font-semibold">
                    <span className="capitalize">rate option</span>
                  </Label>
                  <div className="p-3 border rounded-lg">
                    <div className="flex gap-3 items-center justify-between">
                      <div className="flex-none">
                        <Label className="text-xs font-semibold">
                          <span className="capitalize">market rate</span>
                        </Label>
                      </div>
                      <div className="flex-none">
                        <Switch />
                      </div>
                      <div className="flex-none">
                        <Label className="text-xs font-semibold">
                          <span className="capitalize">limit</span>
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="gap-3 justify-end">
              <div className="flex-none">
                <Button type="reset" variant="ghost" className="p-3 text-xs font-bold">
                  <span className="capitalize">cancel</span>
                </Button>
              </div>
              <div className="flex-none">
                <Button type="submit" variant="default" className="p-3 text-xs font-bold">
                  <span className="capitalize">execute sell trade</span>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}