import Link from "next/link";
import Image from "next/image";

import { Fragment } from "react";

import { Button } from "@/components/shadcn/ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Fragment>
      <header className="top-0 left-0 sticky border-b">
        <div className="py-5">
          <div className="container">
            <div className="flex items-center justify-between">
              <div className="flex-none">
                <Link href="/coins">
                  <Image
                    width="35"
                    alt="Logo"
                    height="35"
                    src="/favicon.ico"
                  />
                </Link>
              </div>
              <div className="flex-none">
                <div className="flex gap-5 items-center">
                  <div className="flex-none">
                    <Button asChild variant="ghost">
                      <Link href="/coins" className="text-base font-bold">
                        <span className="capitalize">
                          coin details
                        </span>
                      </Link>
                    </Button>
                  </div>
                  <div className="flex-none">
                    <Button asChild variant="ghost">
                      <Link href="/coins/balances" className="text-base font-bold">
                        <span className="capitalize">
                          coin balances
                        </span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {children}
    </Fragment>
  );
}