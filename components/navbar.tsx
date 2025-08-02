'use client'
import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import {
  Logo,
} from "@/components/icons";
import {ButtonLink} from "@/components/buttonLink";
import LocaleSwitcherSelect from "@/components/LocaleSwitcherSelect";
import {locales} from "@/i18n/config";
import {getUserLocale} from "@/services/locale";

export default function Navbar() {
    // const pouet = await getUserLocale()
    return (
        <HeroUINavbar maxWidth="full" position="sticky" className="transparent py-4 z-50">
          <NavbarContent className="basis-1/5 sm:basis-full my-4 ml-16" justify="start">
            <NavbarBrand as="li" className="gap-3 max-w-fit">
              <NextLink className="flex justify-start items-center gap-1" href="/">
                <Logo size={180}/>
              </NextLink>
            </NavbarBrand>
          </NavbarContent>

            <NavbarContent
                className="hidden sm:flex basis-1/5 self-end gap-4 items-center justify-center"
            >
                <ul className="hidden lg:flex gap-8 justify-start">
                    {siteConfig.navItems.map((item) => (
                        <NavbarItem key={item.href}>
                            <NextLink
                                className={clsx(
                                    linkStyles({color: "foreground"}),
                                    "data-[active=true]:text-primary data-[active=true]:font-medium",
                                )}
                                color="foreground"
                                href={item.href}
                            >
                                {item.label}
                            </NextLink>
                        </NavbarItem>
                    ))}
                </ul>
                <ButtonLink variant='black' href='/#book-a-scan' className='ml-4 text-sm'>PRENDRE RENDEZ-VOUS</ButtonLink>

                <LocaleSwitcherSelect defaultValue={'en'} items={locales} label='' />
            </NavbarContent>

            <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
                <NavbarMenuToggle/>
            </NavbarContent>

            <NavbarMenu>
                <div className="mx-4 mt-16 flex flex-col items-center gap-8">
                    {siteConfig.navMenuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link color="foreground" href={item.href} size="lg">
                                {item.label}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                    <ButtonLink variant='transparent' href='/#book-a-scan' className='text-sm'>Réserver un scan</ButtonLink>
                </div>
            </NavbarMenu>
        </HeroUINavbar>
    );
};
