import LoggedInShell from "../../components/LoggedInShell";
import { NewFlag } from "../../components/NewFlag";

export default function Page() {
  return (
    <LoggedInShell>
      <NewFlag />
    </LoggedInShell>
  );
}
