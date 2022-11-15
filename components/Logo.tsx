import { Title, Text, Stack, useMantineColorScheme } from "@mantine/core";
import style from "./Logo.module.css";

export function LargeLogo() {
  return (
    <Stack spacing={0} align="center">
      <Title order={1} className={style.largeLogo}>
        vexilio<span className={style.tm}>TM</span>
      </Title>
      <Text color="dimmed" mt={-16} weight={400}>
        blazingly fast enterprise scale feature flagging for the new age
      </Text>
    </Stack>
  );
}

export function SmallLogo() {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Title
      size="40px"
      weight={colorScheme === "light" ? 700 : 500}
      order={1}
      className={style.smallLogo}
    >
      vexilio
    </Title>
  );
}
