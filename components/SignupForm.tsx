
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

type Props = React.ComponentProps<"div">

export function SignupForm({ className, ...props }: Props) {
	return (
		<div>
			<div className="grid gap-6">
				<div className="grid gap-3">
					<Label htmlFor="email">Email</Label>
					<Input
						id="email"
						type="email"
						placeholder="m@example.com"
						required
					/>
				</div>
				<div className="grid gap-3">
					<div className="flex items-center">
						<Label htmlFor="password">Password</Label>
						<a
							href="#"
							className="ml-auto text-sm underline-offset-4 hover:underline"
						>
							Forgot your password?
						</a>
					</div>
					<Input id="password" type="password" required />
				</div>
				<Button type="submit" className="w-full">
					Sign Up
				</Button>
			</div>
			<div className="text-center text-sm">
				Don&apos;t have an account?{" "}
				<Link href="/login" className="underline underline-offset-4">
					Login
				</Link>
			</div>
		</div>
	)
}
