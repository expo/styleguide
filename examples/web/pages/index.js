import Link from "next/link";
import { ArrowRightIcon } from "@expo/styleguide";

export default function Home() {
  return (
    <div className="p-8">
      <Link href="/typography">
        <a className="text-heading-xl font-medium flex items-center gap-2 hover:underline">
          <span>Typography</span>
          <ArrowRightIcon color="currentColor" className='w-6 h-6' />
        </a>
      </Link>
    </div>
  );
}
