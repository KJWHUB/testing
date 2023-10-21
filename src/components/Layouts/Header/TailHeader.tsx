"use client";

import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  AcademicCapIcon,
  ArrowRightOnRectangleIcon,
  ClipboardDocumentListIcon,
  PaintBrushIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import $g from "@/utils";
import { classNames } from "@/utils/class";

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
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <ProfileMenu session={session} />
      </div>
    );
  }
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

function ProfileMenu({ session }: { session: any }) {
  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button>
          <UserCircleIcon className="inline-block h-8 w-8 ml-1 text-blue-500" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <Link
                href={`/user/${session.user.id}/profile`}
                className={classNames(
                  active ? "bg-gray-100" : "",
                  "block px-4 py-2 text-sm text-gray-700"
                )}
              >
                Profile
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={classNames(
                  active ? "bg-gray-100" : "",
                  "block w-full px-4 py-2 text-sm text-left text-gray-700"
                )}
                onClick={() => {
                  signOut();
                }}
              >
                Sign out
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
