import { Center, Loader, useMantineTheme } from "@mantine/core";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NotFound() {
  const session = useSession();
  const router = useRouter();
  const theme = useMantineTheme();

  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/flags");
    } else if (session.status === "unauthenticated") {
      router.push("/");
    }
  }, [router, session.status]);

  return (
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
  );
}
