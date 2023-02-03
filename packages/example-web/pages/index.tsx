import Link from "next/link";
import  { ArrowRightIcon } from "@expo/styleguide-icons";

export default function Home() {
  return (
    <div className='p-8'>
      <Link href='/colors' className='text-heading-xl font-medium flex items-center gap-2 hover:underline'>
        <span>Colors</span>
        <ArrowRightIcon color='currentColor' />
      </Link>
      <Link href='/typography' className='text-heading-xl font-medium flex items-center gap-2 hover:underline'>
        <span>Typography</span>
        <ArrowRightIcon color='currentColor' />
      </Link>
      <Link href='/icons' className='text-heading-xl font-medium flex items-center gap-2 hover:underline'>
        <span>Icons</span>
        <ArrowRightIcon color='currentColor' />
      </Link>
      <Link href='/ui' className='text-heading-xl font-medium flex items-center gap-2 hover:underline'>
        <span>UI</span>
        <ArrowRightIcon color='currentColor' />
      </Link>
    </div>
  );
}
