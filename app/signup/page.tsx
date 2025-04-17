
import { AuthForm } from "@/components/AuthPage";
import { SignupForm } from "@/components/SignupForm";

export default function Page() {
	return (
		<div className="flex justify-center items-center h-screen">
			<AuthForm Form={<SignupForm />} />
		</div>
	)
}
