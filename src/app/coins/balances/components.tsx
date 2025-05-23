"use client";

import Image from "next/image";

import { Fragment } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

import { Button } from "@/components/shadcn/ui/button";
import { Card, CardContent } from "@/components/shadcn/ui/card";
import { CardFooter, CardHeader } from "@/components/shadcn/ui/card";

interface GridProps {
  data: Array<{
    name: string;
    icon: string;
    percent: number;
    rate: number;
    balance: number;
    excess: number;
  }>;
}

export function Grid({ data }: GridProps) {
  return (
    <div className="grid gap-3 grid-cols-12">
      {data.map(({ icon, name, percent, rate, balance, excess }, index) => (
        <Fragment key={index}>
          <div className="col-span-12 md:col-span-6 xl:col-span-4">
            <Card className="gap-3">
              <CardHeader className="flex gap-3 items-center justify-between">
                <div className="flex-none">
                  <div className="flex gap-3 items-center">
                    <div className="flex-none">
                      <Image
                        src={icon}
                        alt={name}
                        width="18"
                        height="18"
                      />
                    </div>
                    <div className="flex-none">
                      <p className="font-bold">
                        <span className="sentence">
                          {name}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-none">
                  <Button disabled size="sm" variant="secondary" className={`!opacity-100 ${(
                    percent > 0
                    ? "text-green-300"
                    : "text-red-300"
                  )}`}>
                    {percent > 0 ? <ArrowUp /> : <ArrowDown />}
                    <p className="text-xs font-bold">
                      <span className="capitalize">
                        {percent}%
                      </span>
                    </p>
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <p className="text-xs">
                    <span className="capitalize">
                      balance
                    </span>
                  </p>
                  <div className="text-lg font-bold">
                    <span className="capitalize">
                      {balance} {name}
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-xs">
                    <span className="capitalize">
                      current rate
                    </span>
                  </p>
                  <div className="text-lg font-bold">
                    <span className="capitalize">
                      US {rate.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD"
                      })}
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex gap-3 items-center justify-between">
                <div className="flex-none">
                  <p className="text-xs">
                    <span className="sentence text-primary">
                      excess coin: {excess} {name}
                    </span>
                  </p>
                </div>
                <div className="flex-none">
                  <Button className="text-xs font-bold">
                    <span className="capitalize">
                      exchange coin
                    </span>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </Fragment>
      ))}
    </div>
  );
}