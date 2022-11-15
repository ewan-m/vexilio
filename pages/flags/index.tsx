import { FeatureFlags } from "../../components/FeatureFlags";
import LoggedInShell from "../../components/LoggedInShell";
import { trpc } from "../../components/trpc";

export default function Flags() {
  const stuff = trpc.hello.useQuery({text: "mo"});

  
  return (
    <LoggedInShell>
      <FeatureFlags />
    </LoggedInShell>
  );
}
