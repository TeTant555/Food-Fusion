import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useDispatch } from "react-redux"
import z from "zod"
import { useState } from "react"
import api from "@/api"
import { hideLoader, openLoader } from "@/store/features/loaderSlice"
import { setUserData } from "@/store/features/authSlice"
import React from "react"
import { toast } from "sonner";

interface SignUpProps {
  onSwitchToLogin: () => void;
  onAuthSuccess?: () => void;
}

export function SignUp({ onSwitchToLogin, onAuthSuccess }: SignUpProps) {
  const dispatch = useDispatch();

  const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters long",
    }),
    confirmPassword: z.string().min(8, {
      message: "Password must be at least 8 characters long",
    })
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState("");
  const [fieldErrors, setFieldErrors] = useState<{ email?: string; password?: string }>({});
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { mutate: registerUser } = api.auth.addRegister.useMutation({
    onMutate: () => {
      dispatch(openLoader());
    },
    onSuccess: (data) => {
      const payload = {
        userId: String(data.id),
        email: data.email,
        role: data.role
      };
      dispatch(setUserData(payload));
      toast.success("Sign up successful!", {
        style: {
          background: 'var(--color-ter)',
          color: 'var(--color-sec)',
        },
      });
      if (onAuthSuccess) onAuthSuccess();
    },
    onError: (error) => {
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setErrorMessage("Invalid email or password");
      console.error("Error during registration:", error);
      toast.error("Invalid email or password", {
        style: {
          background: 'var(--color-ter)',
          color: 'var(--color-sec)',
        },
      });
    },
    onSettled: () => {
      dispatch(hideLoader());
    },
  });

  const onSubmit = async () => {
    try {
      setFieldErrors({});
      setErrorMessage("");
      LoginSchema.parse({ email, password, confirmPassword });

      if (password !== confirmPassword) {
        setMatchPassword("Passwords do not match");
        setPassword("");
        setConfirmPassword("");
        return;
      } else {
        setMatchPassword("");
      }

      const userData: AddRegisterType = { email, password, role: "customer" };
      await registerUser(userData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors: { email?: string; password?: string } = {};
        error.issues.forEach((e) => {
          if (e.path[0] === "email") errors.email = e.message;
          if (e.path[0] === "password") errors.password = e.message;
          if (e.path[0] === "confirmPassword") errors.password = e.message;
        });
        setErrorMessage("Invalid email or password");
        setFieldErrors(errors);
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        console.error("Validation errors:", errors);
      } else {
        setErrorMessage("Invalid email or password");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        console.error("Error during registration:", error);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className={cn("flex flex-col gap-6")}>
      <Card className="bg-ter min-w-100">
        <CardHeader>
          <CardTitle className="text-xl manrope text-txt">Register the account</CardTitle>
          <CardDescription className="inter">
            Enter your information below to register to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label className="manrope" htmlFor="email">Email</Label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  type="email"
                  className={fieldErrors.email || errorMessage
                    ? "!bg-red-200 inter text-txt !border-red-500 !border-2 ring-0 focus:outline-none focus-visible:ring-0"
                    : "inter !ring-sec !border-0 shadow-md !bg-pri"}
                  placeholder={fieldErrors.email || errorMessage ? errorMessage : "example@gmail.com"}
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label className="manrope" htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    placeholder={fieldErrors.password ? fieldErrors.password : "********"}
                    className={
                      (fieldErrors.password || errorMessage
                        ? "!bg-red-200 inter text-txt !border-red-500 !border-2 ring-0 focus:outline-none focus-visible:ring-0"
                        : "inter !ring-sec !border-0 shadow-md !bg-pri")
                      + " pr-10"
                    }
                    type={showPassword ? "text" : "password"}
                    required
                  />
                  <button
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-xl"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                    tabIndex={-1}
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
              </div>
              <div className="grid gap-3">
                <Label className="manrope" htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    id="confirmPassword"
                    placeholder={matchPassword ? matchPassword : "********"}
                    className={
                      (matchPassword
                        ? "!bg-red-200 inter text-txt !border-red-500 !border-2 ring-0 focus:outline-none focus-visible:ring-0"
                        : "inter !ring-sec !border-0 shadow-md !bg-pri")
                      + " pr-10"
                    }
                    type={showPassword ? "text" : "password"}
                    required
                  />
                  <button
                    type="button"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-xl"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                    tabIndex={-1}
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full inter bg-sec text-ter hover:bg-sec/80">
                  Register
                </Button>
              </div>
            </div>
            <div className="mt-4 inter text-txt text-center text-sm">
              Already have an account?{" "}
              <Button
                className="underline cursor-pointer bg-transparent text-txt hover:bg-transparent !shadow-none !p-1 underline-offset-4"
                type="button"
                onClick={onSwitchToLogin}
              >
                Sign in
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}