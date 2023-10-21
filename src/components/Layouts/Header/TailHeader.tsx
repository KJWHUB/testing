"use client";

import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  AcademicCapIcon,
  ArrowRightOnRectangleIcon,
  ClipboardDocumentListIcon,
  PaintBrushIcon,
} from "@heroicons/react/20/solid";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import $g from "@/utils";

export default function TailHeader() {
  return (
    <Disclosure as="nav" className="bg-white shadow-md">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                {/* logo */}
                <Logo />
                {/* nav */}
                <NavComponent />
              </div>
              {/* right */}
              <MenuRight />
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}

const Logo = () => {
  return (
    <div className="flex flex-shrink-0 items-center">
      <Link href="/">
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
        />
      </Link>
    </div>
  );
};

const NavComponent = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [navigation, setNavigation] = useState([
    {
      name: "Dashboard",
      href: "/",
      current: false,
      icon: <ClipboardDocumentListIcon className="h-5 w-5 mr-1" />,
    },
    {
      name: "게시판",
      href: "/board",
      current: false,
      icon: <AcademicCapIcon className="h-5 w-5 mr-1" />,
    },
    {
      name: "Graphic",
      href: "/graphic",
      current: false,
      icon: <PaintBrushIcon className="h-5 w-5 mr-1" />,
    },
  ]);

  useEffect(() => {
    const copyState = [...navigation];
    copyState.forEach((el) => (el.current = false));
    const item = copyState.find((el) => el.href === pathname);
    if (!item) new Error("현재경로 에 일치하는 item 이 존재하지 않습니다.");
    else {
      item.current = true;
    }
    setNavigation(copyState);
  }, [pathname, searchParams]);

  return (
    <div className="hidden sm:ml-6 sm:block">
      <div className="flex space-x-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={$g.classNames(
              item.current
                ? "bg-blue-500 text-white"
                : "text-gray-300 hover:bg-blue-300 hover:text-white",
              "flex rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 "
            )}
            aria-current={item.current ? "page" : undefined}
          >
            {item?.icon}
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

const MenuRight = () => {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <Link
        href="/login"
        className="text-sm font-semibold leading-6 text-blue-500"
      >
        Log in
        <ArrowRightOnRectangleIcon className="inline-block h-6 w-6 ml-1 text-blue-500" />
      </Link>
    </div>
  );
};
