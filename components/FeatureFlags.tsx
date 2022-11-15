import {
  createStyles,
  Card,
  Group,
  Switch,
  Text,
  Button,
  Stack,
  Title,
} from "@mantine/core";
import { IconPlus } from "@tabler/icons";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  item: {
    "& + &": {
      paddingTop: theme.spacing.sm,
      marginTop: theme.spacing.sm,
      borderTop: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },
  },

  switch: {
    "& *": {
      cursor: "pointer",
    },
  },
}));

export function FeatureFlags() {
  const { classes } = useStyles();
  const router = useRouter();

  const items = [
    {
      title: "Validation service",
      description:
        "When enabled the validation service will be invoked rather than using the internal library",
    },
  ].map((item) => (
    <Group
      key={item.title}
      position="apart"
      className={classes.item}
      noWrap
      spacing="xl"
    >
      <div>
        <Text>{item.title}</Text>
        <Text size="xs" color="dimmed">
          {item.description}
        </Text>
      </div>
      <Switch
        onLabel="ON"
        offLabel="OFF"
        className={classes.switch}
        size="lg"
      />
    </Group>
  ));

  return (
    <Card withBorder radius="md" p="xl" className={classes.card}>
      <Stack spacing={"xl"} align="flex-start" justify="flex-start">
        <div>
          <Title order={2} size="h2" weight={700}>
            Feature flags
          </Title>
          <Text size="xs" color="dimmed">
            Control which features are enabled and disabled
          </Text>
        </div>

        <div>{items}</div>
        <Button
          leftIcon={<IconPlus size={14} />}
          onClick={() => {
            router.push("/flags/new");
          }}
        >
          Create feature flag
        </Button>
      </Stack>
    </Card>
  );
}
