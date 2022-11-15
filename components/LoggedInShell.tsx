import {
  AppShell,
  Header,
  Group,
  ActionIcon,
  useMantineTheme,
  useMantineColorScheme,
} from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons";
import React, { ReactElement } from "react";
import { AuthProtection } from "./AuthProtection";
import { SmallLogo } from "./Logo";
import NavBar from "./NavBar";

export default function LoggedInShell({
  children,
}: {
  children: ReactElement;
}) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <AuthProtection>
      <AppShell
        padding="xl"
        navbar={<NavBar />}
        header={
          <Header height={60}>
            <Group sx={{ height: "100%" }} px={20} position="apart">
              <SmallLogo />
              <ActionIcon
                variant="default"
                onClick={() => toggleColorScheme()}
                size={30}
              >
                {colorScheme === "dark" ? (
                  <IconSun size={16} />
                ) : (
                  <IconMoonStars size={16} />
                )}
              </ActionIcon>
            </Group>
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        {children}
      </AppShell>
    </AuthProtection>
  );
}
