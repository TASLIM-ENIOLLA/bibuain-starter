"use client";

import Image from "next/image";

import { Fragment, useState } from "react";

import { ArrowDown, ArrowUp, ChevronDown, RefreshCcw } from "lucide-react";

import { Input } from "@/components/shadcn/ui/input";
import { Label } from "@/components/shadcn/ui/label";
import { Switch } from "@/components/shadcn/ui/switch";
import { Button } from "@/components/shadcn/ui/button";
import { DropdownMenuTrigger } from "@/components/shadcn/ui/dropdown-menu";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/shadcn/ui/card";
import { DropdownMenu, DropdownMenuContent } from "@/components/shadcn/ui/dropdown-menu";
import { DropdownMenuGroup, DropdownMenuItem } from "@/components/shadcn/ui/dropdown-menu";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/shadcn/ui/dialog";

export default function Page() {
  const data = [
    {
      "icon": "/assets/images/coins/bitcoin.png",
      "coin": "BTC",
      "balance": 0.45,
      "current_rate_usd": 62500.00,
      "excess_coin": 0.20,
      "change_percent": 2.3
    },
    {
      "icon": "/assets/images/coins/usdt.png",
      "coin": "USDT",
      "balance": 1250.75,
      "current_rate_usd": 1.00,
      "excess_coin": 500.00,
      "change_percent": 0.01
    },
    {
      "icon": "/assets/images/coins/ethereum.png",
      "coin": "ETH",
      "balance": 3.20,
      "current_rate_usd": 3450.00,
      "excess_coin": 1.50,
      "change_percent": -1.2
    }
  ]

  return (
    <section className="py-20">
      <div className="container">
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <div className="flex-none">
              <h5 className="font-bold text-lg">
                <span className="capitalize">
                  coin balances
                </span>
              </h5>
            </div>
            <div className="flex-none">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary">
                    <RefreshCcw />
                    <p className="text-xs font-bold">
                      <span className="capitalize">
                        refresh
                      </span>
                    </p>
                    <ChevronDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent side="bottom" align="end" className="w-48">
                  <DropdownMenuGroup>
                    {["All", "Binance", "Coinbase", "Kraken"].map((type, index) => (
                      <Fragment key={index}>
                        <DropdownMenuItem className="text-xs font-bold">
                          <span className="capitalize">
                            {type}
                          </span>
                        </DropdownMenuItem>
                      </Fragment>
                    ))}
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="grid gap-5 grid-cols-12">
            {data.map((props, index) => {
              const [open, setOpen] = useState(false);

              return (
                <Fragment key={index}>
                  <div className="col-span-4">
                    <Card className="gap-3">
                      <CardHeader className="flex items-center justify-between">
                        <div className="flex-none">
                          <Image
                            width="20"
                            height="20"
                            alt="Bitcoin Logo"
                            src={props.icon}
                          />
                        </div>
                        <div className="flex-none">
                          <p className="text-sm font-bold">
                            <span className={props.change_percent > 0 ? "text-green-600" : "text-red-600"}>
                              {
                                props.change_percent > 0
                                ? <ArrowUp className="inline-block mr-1 size-4 align-text-bottom" />
                                : <ArrowDown className="inline-block mr-1 size-4 align-text-bottom" />
                              }
                              {props.change_percent}%
                            </span>
                          </p>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="space-y-0">
                          <p className="font-bold text-xs">
                            <span className="capitalize text-muted-foreground">
                              balance
                            </span>
                          </p>
                          <h3 className="text-xl font-bold">
                            <span className="capitalize">
                              {props.balance} {props.coin}
                            </span>
                          </h3>
                        </div>
                        <div className="space-y-0">
                          <p className="font-bold text-xs">
                            <span className="capitalize text-muted-foreground">
                              current rate
                            </span>
                          </p>
                          <h3 className="text-xl font-bold">
                            <span className="capitalize">
                              US {props.current_rate_usd.toLocaleString("en-US", {
                                style: "currency",
                                currency: "USD"
                              })}
                            </span>
                          </h3>
                        </div>
                      </CardContent>
                      <CardFooter className="flex items-center justify-between">
                        <div className="flex-none">
                          <p className="text-xs font-bold">
                            <span className="capitalize text-primary">
                              excess coin: {props.excess_coin} {props.coin}
                            </span>
                          </p>
                        </div>
                        <div className="flex-none">
                          <Dialog open={open}>
                            <DialogTrigger asChild>
                              <Button onClick={() => setOpen(true)} size="sm" variant="default" className="text-xs text-white">
                                <span className="capitalize">
                                  exchange coin
                                </span>
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="w-md">
                              <DialogTitle className="font-bold">
                                <span className="capitalize">
                                  excess coin details - BTC
                                </span>
                              </DialogTitle>
                              <div className="grid gap-x-3 gap-y-5 grid-cols-12">
                                <div className="col-span-6">
                                  <div className="space-y-2">
                                    <Label className="capitalize">
                                      <span className="text-muted-foreground">
                                        total coin (wallet + vendor)
                                      </span>
                                    </Label>
                                    <Input defaultValue="0.5" />
                                  </div>
                                </div>
                                <div className="col-span-6">
                                  <div className="space-y-2">
                                    <Label className="capitalize">
                                      <span className="text-muted-foreground">
                                        current rate
                                      </span>
                                    </Label>
                                    <Input disabled defaultValue="US $62,500.00" className="p-0 border-none shadow-none !bg-transparent" />
                                  </div>
                                </div>
                                <div className="col-span-12">
                                  <div className="space-y-2">
                                    <Label className="capitalize">
                                      <span className="text-muted-foreground">
                                        capital coin
                                      </span>
                                    </Label>
                                    <Input defaultValue="0.3" />
                                  </div>
                                </div>
                                <div className="col-span-12">
                                  <div className="space-y-2">
                                    <Label className="capitalize">
                                      <span className="text-muted-foreground">
                                        excess coin
                                      </span>
                                    </Label>
                                    <Input defaultValue="0.20000000" />
                                  </div>
                                </div>
                                <div className="col-span-12">
                                  <div className="space-y-2">
                                    <Label className="capitalize">
                                      <span className="text-muted-foreground">
                                        rate option
                                      </span>
                                    </Label>
                                    <div className="p-2 border  bg-muted flex rounded-lg items-center justify-between">
                                      <div className="flex-none">
                                        <p className="capitalize">
                                          <span className="font-bold text-muted-foreground">
                                            market rate
                                          </span>
                                        </p>
                                      </div>
                                      <div className="flex-none">
                                        <Switch />
                                      </div>
                                      <div className="flex-none">
                                        <p className="capitalize">
                                          <span className="font-bold text-muted-foreground">
                                            limit
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-span-12">
                                  <div className="flex gap-3 items-center justify-end">
                                    <div className="flex-none">
                                      <Button onClick={() => setOpen(false)} variant="outline" className="text-sm h-auto !bg-transparent">
                                        <span className="capitalize text-black">
                                          cancel
                                        </span>
                                      </Button>
                                    </div>
                                    <div className="flex-none">
                                      <Button onClick={() => setOpen(false)} variant="default" className="h-auto text-sm">
                                        <span className="capitalize text-white">
                                          execute sell trade
                                        </span>
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}