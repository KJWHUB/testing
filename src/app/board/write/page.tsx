"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import BasicButton from "@/components/Button/BasicButton";
import BasicCard from "@/components/Card/BasicCard";
import BasicDialog from "@/components/Dialog/BasicDialog";

import { postData } from "@/services/board";

export default function BoardWrite() {
  const router = useRouter();
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [values, setValues] = useState({
    title: "",
    content: "",
  });

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const handleChange = (e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const requestData = { ...values, email: session?.user.email };
    postData(requestData);
    closeModal();
    router.refresh();
    router.push("/board");
  };

  return (
    <main className="p-5">
      <BasicCard>
        {/* form */}
        <form className="p-4">
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
                    htmlFor="content"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    내용
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="content"
                      name="content"
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
        </form>
        {/* button */}
        <div className="flex flex-row-reverse px-4 pb-2">
          <BasicButton btnClick={openModal} bttnText="작성하기" />

          <Link className="flex items-center mr-3" href={"/board"}>
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              취소
            </button>
          </Link>
        </div>
        <BasicDialog
          isShow={isOpen}
          closeModal={closeModal}
          handleSubmit={handleSubmit}
          title="게시글을 등록 하시겠습니까?"
          subText="부적절한 단어 및 문장이 포함되었을시 사전 알림없이 게시글이 삭제처리 될수 있습니다."
        ></BasicDialog>
      </BasicCard>
    </main>
  );
}
