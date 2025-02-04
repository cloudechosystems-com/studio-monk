"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../button";
import { handleSendEmailVerificationCode } from "@/lib/cognitoActions";
import { useActionState } from "react";

export default function SendVerificationCode() {
  const [dispatch] = useActionState(handleSendEmailVerificationCode, {
    message: "",
    errorMessage: "",
  });

  const { pending } = useFormStatus();
  return (
    <>
      <Button
        className="mt-4 w-full"
        aria-disabled={pending}
        formAction={dispatch}
      >
        Resend Verification Code
      </Button>
    </>
  );
}
