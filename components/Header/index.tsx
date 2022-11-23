//* Libraries
import Link from "next/link";

//* Components
import Button from "@components/Button";

export default function Header() {
  return (
    <header className="flex flex-row items-center justify-between w-full h-16 px-4">
      <div className="flex justify-between">
        <h1 className="text-xl">Untitled</h1>
      </div>
      <div className="flex items-center justify-between">
        <TextLink href="/planetscale" title="Planetscale" />
        <TextLink href="/neon" title="Neon" />
        <TextLink href="/supabase" title="Supabase" />
        <TextLink href="/about" title="About" />
        <Button text="Login" className="ml-4" />
      </div>
    </header>
  );
}

interface TextLinkProps {
  title: string;
  href: string;
}

function TextLink({ href, title }: TextLinkProps) {
  return (
    <Link href={href}>
      <h2 className="pl-4 text-xs">{title}</h2>
    </Link>
  );
}
