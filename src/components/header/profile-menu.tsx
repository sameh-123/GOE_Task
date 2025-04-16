import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import ImageFallback from '../shared/image-fallback';
import ProfileLinks from './profile-links';

export default function ProfileMenu({
  userImage,
}: {
  userImage: string | null | undefined;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer" asChild>
        <ImageFallback
          src={userImage || ''}
          fallback="/use-fallback.png"
          alt="user profile image"
          width={1000}
          height={1000}
          className="size-12 rounded-full"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-5 rounded-4xl">
        <ProfileLinks />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
