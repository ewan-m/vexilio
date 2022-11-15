import { Navbar, ThemeIcon } from "@mantine/core";

import React from "react";
import {
  IconUsers,
  IconFlag,
  IconArrowsSplit,
  IconLogout,
  IconInfoCircle,
} from "@tabler/icons";
import {
  UnstyledButton,
  Group,
  Avatar,
  Text,
  Box,
  useMantineTheme,
} from "@mantine/core";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export function User() {
  const theme = useMantineTheme();

  const session = useSession();

  return (
    <Box
      sx={{
        paddingTop: theme.spacing.sm,
        borderTop: `1px solid ${
          theme.colorScheme === "dark"
            ? theme.colors.dark[4]
            : theme.colors.gray[2]
        }`,
      }}
    >
      <UnstyledButton
        sx={{
          display: "block",
          width: "100%",
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
        }}
        onClick={() => {
          signOut({ callbackUrl: "/" });
        }}
      >
        <Group>
          <Avatar src={session.data?.user?.image} radius="xl" />
          <Box sx={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              {session.data?.user?.name}
            </Text>
            <Text color="dimmed" size="xs">
              {session.data?.user?.email}
            </Text>
          </Box>
          <IconLogout size={18} />
        </Group>
      </UnstyledButton>
    </Box>
  );
}

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  href: string;
}

function MainLink({ icon, color, label, href }: MainLinkProps) {
  return (
    <Link href={href} passHref style={{ textDecoration: "none" }}>
      <UnstyledButton
        sx={(theme) => ({
          display: "block",
          width: "100%",
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
        })}
      >
        <Group>
          <ThemeIcon color={color} variant="light">
            {icon}
          </ThemeIcon>

          <Text size="sm">{label}</Text>
        </Group>
      </UnstyledButton>
    </Link>
  );
}

const data = [
  {
    icon: <IconFlag size={16} />,
    color: "violet",
    label: "Flags",
    href: "/flags",
  },
  {
    icon: <IconArrowsSplit size={16} />,
    color: "grape",
    label: "Environments",
    href: "/environments",
  },
  {
    icon: <IconUsers size={16} />,
    color: "blue",
    label: "Teams",
    href: "/teams",
  },
  {
    icon: <IconInfoCircle size={16} />,
    color: "teal",
    label: "Usage",
    href: "/usage",
  },
];

export function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}

export default function NavBar() {
  return (
    <Navbar p="xs" width={{ base: 300 }}>
      <Navbar.Section grow mt="md">
        <MainLinks />
      </Navbar.Section>
      <Navbar.Section>
        <User />
      </Navbar.Section>
    </Navbar>
  );
}
