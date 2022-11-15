import { FeatureFlags } from "../../components/FeatureFlags";
import LoggedInShell from "../../components/LoggedInShell";

export default function Flags() {
  return (
    <LoggedInShell>
      <FeatureFlags />
    </LoggedInShell>
  );
}
