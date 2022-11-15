import {
  createStyles,
  Card,
  Group,
  Switch,
  Text,
  Button,
  Stack,
  Title,
  Box,
  Checkbox,
  TextInput,
  Select,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconPlus } from "@tabler/icons";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  switch: {
    "& *": {
      cursor: "pointer",
    },
  },
}));

export function NewFlag() {
  const { classes } = useStyles();
  const router = useRouter();

  const form = useForm({
    initialValues: {
      featureFlagKey: "",

      termsOfService: false,
    },

    validate: {
      featureFlagKey: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email",
    },
  });

  return (
    <Card withBorder radius="md" p="xl" className={classes.card}>
      <Stack spacing={"xl"} align="flex-start" justify="flex-start">
        <Title order={2} size="h2" weight={700}>
          Create feature flag
        </Title>
        <Box sx={{ maxWidth: 300 }}>
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <Stack align="flex-start" justify="flex-start">
              <TextInput
                label="Flag key"
                placeholder="unique_flag_key"
                {...form.getInputProps("email")}
              />
              <Select
                label="Environments"
                placeholder="Pick one"
                data={[
                  { value: "react", label: "React" },
                  { value: "ng", label: "Angular" },
                  { value: "svelte", label: "Svelte" },
                  { value: "vue", label: "Vue" },
                ]}
              />
              <Select
                label="Team"
                placeholder="Pick one"
                data={[
                  { value: "react", label: "React" },
                  { value: "ng", label: "Angular" },
                  { value: "svelte", label: "Svelte" },
                  { value: "vue", label: "Vue" },
                ]}
              />

              <Button
                leftIcon={<IconPlus size={14} />}
                onClick={() => {
                  router.push("/flags");
                }}
                type="submit"
              >
                Create flag
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Card>
  );
}
