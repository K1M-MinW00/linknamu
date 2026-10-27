import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center px-4 py-12">
      <ProfileHeader profile={profile} />
      <ul className="mt-10 flex w-full flex-col gap-6">
        {links.map((link) => (
          <li key={link.id}>
            <LinkCard link={link} />
          </li>
        ))}
      </ul>
    </main>
  );
}
