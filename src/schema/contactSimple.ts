import {
  Output,
  email,
  literal,
  maxLength,
  minLength,
  object,
  string,
} from "valibot";

export const ContactSchema = object({
  email: string([
    minLength(1, "入力が必須の項目です"),
    maxLength(255, "255文字以内で入力してください"),
    email("メールアドレスの形式で入力してください"),
  ]),
  telephone: string([
    minLength(1, "電話番号を入力してください"),
    maxLength(11, "入力値が長すぎます"),
  ]),
  givenName: string([
    minLength(1, "入力が必須の項目です"),
    maxLength(20, "入力値が長すぎます"),
  ]),
  lastName: string([
    minLength(1, "入力が必須の項目です"),
    maxLength(20, "入力値が長すぎます"),
  ]),
  organizationName: string([
    minLength(1, "入力が必須の項目です"),
    maxLength(50, "入力値が長すぎます"),
  ]),
  message: string([
    minLength(1, "入力が必須の項目です"),
    maxLength(4098, "入力値が長すぎます"),
  ]),
  agree: literal("true", "同意が必要です"),
});

export type ContactType = Output<typeof ContactSchema>;
