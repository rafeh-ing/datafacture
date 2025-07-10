import { signIn } from "@/auth"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("credentials", { redirectTo: "/dashboard" })
      }}
      className="space-y-4"
    >
      <input name="email" type="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Mot de passe" required />
      <Button type="submit" className="w-full">
        Se connecter
      </Button>
    </form>
  )
}