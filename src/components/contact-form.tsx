"use client";

import { FC } from "react";
import { ContactSchema, ContactType } from "@/schema/contact";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { SubmitHandler, useForm } from "react-hook-form";

interface ContactFormProps {}

const ContactForm: FC<ContactFormProps> = ({}) => {
  const handleOnSubmit: SubmitHandler<ContactType> = (data) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors: formatError, isValid, isSubmitting },
  } = useForm<ContactType>({
    mode: "onBlur",
    resolver: valibotResolver(ContactSchema),
  });

  return (
    <form
      method="post"
      onSubmit={(event) => {
        void handleSubmit(handleOnSubmit)(event);
      }}
      className="flex flex-col space-y-10"
    >
      <label className="flex flex-col space-y-1">
        <div className="text-sm font-bold mb-1">メールアドレス</div>
        <input
          type="text"
          {...register("email")}
          className="text-gray-800 mt-4 rounded-md border py-2 px-3"
          placeholder="例）mail@example.com"
        />
        {formatError.email && (
          <div className="text-red-500 pl-1 pt-1 text-xs">
            {formatError.email.message}
          </div>
        )}
      </label>

      <label className="flex flex-col space-y-1">
        <div className="text-sm font-bold mb-1">電話番号</div>
        <input
          type="text"
          {...register("telephone")}
          className="text-gray-800 mt-4 rounded-md border py-2 px-3"
          placeholder="例）09012345678"
        />
        {formatError.telephone && (
          <div className="text-red-500 pl-1 pt-1 text-xs">
            {formatError.telephone.message}
          </div>
        )}
      </label>

      <label className="flex flex-col space-y-1">
        <div className="text-sm font-bold mb-1">お名前</div>
        <input
          type="text"
          {...register("lastName")}
          className="text-gray-800 mt-4 rounded-md border py-2 px-3"
          placeholder="例）山田"
        />
        {formatError.lastName && (
          <div className="text-red-500 pl-1 pt-1 text-xs">
            {formatError.lastName.message}
          </div>
        )}
        <input
          type="text"
          {...register("givenName")}
          className="text-gray-800 mt-4 rounded-md border py-2 px-3"
          placeholder="例）太郎"
        />
        {formatError.givenName && (
          <div className="text-red-500 pl-1 pt-1 text-xs">
            {formatError.givenName.message}
          </div>
        )}
      </label>

      <label className="flex flex-col space-y-1">
        <div className="text-sm font-bold mb-1">企業名</div>
        <input
          type="text"
          {...register("organizationName")}
          className="text-gray-800 mt-4 rounded-md border py-2 px-3"
          placeholder="例）株式会社◯✕△"
        />
        {formatError.organizationName && (
          <div className="text-red-500 pl-1 pt-1 text-xs">
            {formatError.organizationName.message}
          </div>
        )}
      </label>

      <label className="flex flex-col space-y-1">
        <div className="text-sm font-bold mb-1">お問い合わせ内容</div>
        <textarea
          {...register("message")}
          className="h-36 border px-2 py-1"
        ></textarea>

        {formatError.message && (
          <div className="text-red-500 pl-1 pt-1 text-xs">
            {formatError.message.message}
          </div>
        )}
      </label>

      <div className="flex flex-col items-center space-y-1">
        <div className="flex flex-row items-center space-x-2">
          <label className="flex flex-row items-center space-x-2">
            <input
              type="checkbox"
              value="true"
              {...register("agree")}
              className="h-5 w-5"
            />
            <p>個人情報取り扱いに同意する</p>
          </label>
        </div>
        {formatError.agree && (
          <div className="text-red-500 pl-1 pt-1 text-center text-xs">
            {formatError.agree.message}
          </div>
        )}
      </div>
      <button
        type="submit"
        disabled={!isValid || isSubmitting}
        className="bg-slate-800 hover:bg-slate-600 rounded px-4 py-2 text-white  disabled:bg-gray-300 md:self-center"
      >
        送信する
      </button>
    </form>
  );
};

export default ContactForm;