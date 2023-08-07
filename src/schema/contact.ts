import {
  LiteralSchema,
  Output,
  StringSchema,
  email,
  literal,
  maxLength,
  minLength,
  object,
  string,
} from "valibot";

const emailSchema: StringSchema<string> = string([
  minLength(1, "入力が必須の項目です"),
  maxLength(255, "255文字以内で入力してください"),
  email("メールアドレスの形式で入力してください"),
]);

const telephoneSchema: StringSchema<string> = string([
  minLength(1, "電話番号を入力してください"),
  maxLength(11, "入力値が長すぎます"),
]);

const givenNameSchema: StringSchema<string> = string([
  minLength(1, "入力が必須の項目です"),
  maxLength(20, "入力値が長すぎます"),
]);

const lastNameSchema: StringSchema<string> = string([
  minLength(1, "入力が必須の項目です"),
  maxLength(20, "入力値が長すぎます"),
]);

const organizationNameSchema: StringSchema<string> = string([
  minLength(1, "入力が必須の項目です"),
  maxLength(50, "入力値が長すぎます"),
]);

const messageSchema: StringSchema<string> = string([
  minLength(1, "入力が必須の項目です"),
  maxLength(4098, "入力値が長すぎます"),
]);

const agreeSchema: LiteralSchema<"true", "true"> = literal(
  "true",
  "同意が必要です"
);

export const ContactSchema = object({
  email: emailSchema,
  telephone: telephoneSchema,
  givenName: givenNameSchema,
  lastName: lastNameSchema,
  organizationName: organizationNameSchema,
  message: messageSchema,
  agree: agreeSchema,
});

export type ContactType = Output<typeof ContactSchema>;
