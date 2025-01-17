import { Binoculars, ChartLineUp, User } from "@phosphor-icons/react"
import { Container, NavItemContainer } from "./styles"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { useSession } from "next-auth/react"

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
    icon: <ChartLineUp width={24} />
  },
  {
    label: "Explorar",
    href: "/explore",
    icon: <Binoculars width={24} />
  },
]

export const Navigation = () => {
  const router = useRouter()

  const { data: session } = useSession()

  const navItems = useMemo(() => {
    if (session) {
      return NAV_ITEMS.concat({
        label: "Perfil",
        href: `/profile/${session.user.id}`,
        icon: <User size={24} />
      })
    }

    return NAV_ITEMS
  }, [session])

  return (
    <Container>
      {navItems.map(({ href, label, icon }) => (
        <NavItemContainer href={href} key={label} active={router.asPath === href}>
          {icon}
          {label}
        </NavItemContainer>
      ))}
    </Container>
  )
}