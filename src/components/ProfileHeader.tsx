import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={profile.image}
        alt={`${profile.name} 프로필 사진`}
        width={176}
        height={176}
        priority
        className="h-44 w-44 rounded-full border border-zinc-200 object-cover dark:border-zinc-700"
      />
      <h1 className="mt-4 text-xl font-bold">{profile.name}</h1>
      <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{profile.bio}</p>
    </header>
  );
}
