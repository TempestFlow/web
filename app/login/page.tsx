import { AuthForm } from "@/components/AuthPage";
import { LoginForm } from "@/components/LoginForm";

export default function Page() {
	return (<>
		<div className="flex justify-center items-center h-screen">
			<AuthForm Form={<LoginForm />} />
		</div>
	</>)
}
