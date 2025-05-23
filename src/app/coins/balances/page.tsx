import { Button } from "@/components/shadcn/ui/button";
import { Grid } from "./components";
import { RefreshCcw } from "lucide-react";

export default function Page() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="space-y-3">
          <div className="flex gap-5 items-center justify-between">
            <div className="flex-none">
              <p className="text-lg font-bold">
                <span className="capitalize">
                  coin balances
                </span>
              </p>
            </div>
            <div className="flex-none">
              <Button variant="outline">
                <RefreshCcw />
                <p className="text-xs font-bold">
                  <span className="capitalize">
                    refresh
                  </span>
                </p>
              </Button>
            </div>
          </div>
          <Grid
            data={[
              {
                icon: "/assets/images/coins/bitcoin.png",
                name: "BTC",
                balance: 0.45,
                rate: 62500.00,
                excess: 0.20,
                percent: 2.3
              },
              {
                icon: "/assets/images/coins/usdt.png",
                name: "USDT",
                balance: 1250.75,
                rate: 1.00,
                excess: 500.00,
                percent: 0.01
              },
              {
                icon: "/assets/images/coins/ethereum.png",
                name: "ETH",
                balance: 3.20,
                rate: 3450.00,
                excess: 1.50,
                percent: -1.2
              }
            ]}
          />
        </div>
      </div>
    </section>
  );
}