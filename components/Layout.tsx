import { PropsWithChildren } from "react";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export function Layout({ children }: PropsWithChildren) {
  const router = useRouter();
  const pathName = router.pathname.replace("/", "");
  const leafName = pathName[0].toUpperCase() + pathName.slice(1);
  return (
    <>
      <header>
        <nav aria-label="breadcrumb">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>{leafName}</li>
          </ul>
        </nav>
      </header>
      <div className="container">{children}</div>
    </>
  );
}
