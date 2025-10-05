import * as yup from "yup";

export const userSchemaValidation = yup.object().shape({
  name: yup.string().required("Name is required"),

  email: yup
    .string()
    .email("Not valid email format")
    .required("Email is required"),

  password: yup
    .string()
    .min(4, "Password must be at least 4 characters")
    .max(20, "Password must be no more than 20 characters")
    .required("Password is required"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords don't match")
    .required("Please confirm your password"),
});
