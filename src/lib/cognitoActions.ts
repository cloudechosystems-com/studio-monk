import { redirect } from "next/navigation";
import {
  signUp,
  confirmSignUp,
  signIn,
  signOut,
  resendSignUpCode,
} from "aws-amplify/auth";
import { getErrorMessage } from "@/utils/get-error-message";

export async function handleSignUp(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const {} = await signUp({
      username: String(formData.get("email")),
      password: String(formData.get("password")),
      options: {
        userAttributes: {
          email: String(formData.get("email")),
          name: String(formData.get("name")),
        },
        //optional
        autoSignIn: true,
      },
    });
  } catch (error) {
    return getErrorMessage(error);
  }
  redirect("/auth/confirm-signup");
}

export async function handleSendEmailVerificationCode(
  prevState: { message: string; errorMessage: string },
  formData: FormData
) {
  let currentState;
  try {
    await resendSignUpCode({
      username: String(formData.get("email")),
    });
    currentState = {
      ...prevState,
      message: "Code sent successfully",
    };
  } catch (error) {
    currentState = {
      ...prevState,
      errorMessage: getErrorMessage(error),
    };
  }

  return currentState;
}

export async function handleConfirmSignUp(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const {} = await confirmSignUp({
      username: String(formData.get("email")),
      confirmationCode: String(formData.get("code")),
    });
  } catch (error) {
    return getErrorMessage(error);
  }
  redirect("/auth/login");
}

export async function handleSignIn(
  prevState: string | undefined,
  formData: FormData
) {
  let redirectLink = "/";
  try {
    const { nextStep } = await signIn({
      username: String(formData.get("email")),
      password: String(formData.get("password")),
    });
    if (nextStep.signInStep === "CONFIRM_SIGN_UP") {
      await resendSignUpCode({
        username: String(formData.get("email")),
      });
      redirectLink = "/auth/confirm-signup";
    }
  } catch (error) {
    return getErrorMessage(error);
  }

  redirect(redirectLink);
}

export async function handleSignOut() {
  try {
    await signOut();
  } catch (error) {
    console.log(getErrorMessage(error));
  }
  redirect("/auth/login");
}

// export async function handleSignUp(
//   prevState: string | undefined,
//   formData: FormData
// ) {
//   console.log("signing up");
//   return "Error creating an account";
// }

// export async function handleSendEmailVerificationCode(
//   prevState: { message: string; errorMessage: string },
//   formData: FormData
// ) {
//   console.log("resending verification code");
//   const currentState = {
//     ...prevState,
//     message: "Code sent successfully",
//   };

//   return currentState;
// }

// export async function confirmSignUp(
//   prevState: string | undefined,
//   formData: FormData
// ) {
//   console.log("confirming sign up");
//   return "Invalid code";
// }

// export async function handleSignIn(
//   prevState: string | undefined,
//   formData: FormData
// ) {
//   console.log("signing in");
//   return "Error logging in";
// }

// export async function handleSignOut() {
//   console.log("signing out");
// }
