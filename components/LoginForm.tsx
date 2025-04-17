"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

type Props = React.ComponentProps<"div">

import { useForm } from "react-hook-form";
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { zodResolver } from "@hookform/resolvers/zod"

export function LoginForm({ className, ...props }: Props) {

	const formSchema = z.object({
		username: z.string().min(3).max(128),
		password: z.string().min(8).max(128),
	})

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			password: "",
		},
	})

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		console.log(values)
		const res = await fetch("/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values)
		})
		console.log(res)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
				<FormField
					control={form.control} name="username"
					render={({ field }) => (
						<FormItem className="grid gap-3">
							<FormLabel htmlFor="username">Username</FormLabel>
							<FormControl>
								<Input id="username-input" type="text" placeholder="John Snow" {...field} required />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control} name="password"
					render={({ field }) => (
						<FormItem className="grid gap-3">
							<FormLabel htmlFor="password">Password</FormLabel>
							<FormControl>
								<Input id="password-input" type="password" placeholder="••••••••••••" {...field} required />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit" className="w-full">
					Login
				</Button>
			</form>
			<div className="text-center text-sm">
				Don&apos;t have an account?{" "}
				<Link href="/signup" className="underline underline-offset-4">
					Sign up
				</Link>
			</div>
		</Form>
	)
}
