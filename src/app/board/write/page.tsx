"use client";

import { useState } from "react";
import BasicCard from "@/components/Card/BasicCard";
import BasicDialog from "@/components/Dialog/BasicDialog";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { postData } from "@/services/board";

export default function BoardWrite() {
  const router = useRouter();
  const [values, setValues] = useState({
    title: "",
    contents: "",
  });

  const handleChange = (e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    postData(values);
    router.refresh();
    router.push("/board");
  };

  return (
    <main className="p-5">
      <BasicCard>
        {/* form */}
        <form onSubmit={handleSubmit} className="p-4">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                게시글 작성
              </h2>

              <p className="mt-1 text-sm leading-6 text-gray-600">
                게시글 작성시 부적절한 단어는 삼가해주세요.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    제목
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="title"
                        id="title"
                        onChange={handleChange}
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="게시글 제목을 작성해 주세요."
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="contents"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    내용
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="contents"
                      name="contents"
                      rows={3}
                      onChange={handleChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    최대 500자 까지 입력 가능합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className=" mr-3 text-sm font-semibold leading-6 text-gray-900"
          >
            확인
          </button>
        </form>
        {/* button */}
        <div className="flex flex-row-reverse px-4 pb-2">
          <BasicDialog></BasicDialog>
          <Link className="flex items-center mr-3" href={"/board"}>
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              취소
            </button>
          </Link>
        </div>
      </BasicCard>
    </main>
  );
}
