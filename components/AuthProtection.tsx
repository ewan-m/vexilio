import { Center, Loader, useMantineTheme } from "@mantine/core";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ReactElement, useEffect } from "react";

export function AuthProtection({ children }: { children: ReactElement }) {
  const session = useSession();
  const router = useRouter();

  const doRedirection =
    (session.status === "authenticated" && router.asPath === "/") ||
    (session.status === "unauthenticated" && router.asPath !== "/");

  useEffect(() => {
    if (session.status === "authenticated" && router.asPath === "/") {
      router.push("/flags");
    } else if (session.status === "unauthenticated" && router.asPath !== "/") {
      router.push("/");
    }
  }, [router, session.status]);

  const theme = useMantineTheme();

  return doRedirection ? (
    <Center
      style={{
        height: "100%",
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[8]
            : theme.colors.gray[0],
      }}
    >
      <Loader />
    </Center>
  ) : (
    children
  );
}
