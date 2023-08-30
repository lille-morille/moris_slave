import * as yup from "yup";

const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/;
const emojiRegex = /^(?:[^[\s]*)(?:\p{Emoji}[^[\s]*){1}$/u;

export default yup.object({
  name: yup
    .string()
    .required()
    .min(2, "Subject name must be at least 2 characters")
    .max(15, "Subject name must be at most 15 characters"),
  color: yup.string().required().matches(hexColorRegex),
  emoji: yup.string().required().matches(emojiRegex, "Use an emoji character"),
});
