import { Center, useMantineTheme, Stack } from "@mantine/core";
import { AuthProtection } from "../components/AuthProtection";
import { Login } from "../components/Login";
import { LargeLogo } from "../components/Logo";

export default function Entry() {
  const theme = useMantineTheme();

  return (
    <AuthProtection>
      <Center
        style={{
          height: "100%",
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        }}
      >
        <Stack spacing={48} pb={32} align="center">
          <LargeLogo />
          <Login />
        </Stack>
      </Center>
    </AuthProtection>
  );
}
