import Link from "next/link";
import { Icon } from "../components/Icon";

export default function Home() {
  return (
    <div className='p-8'>
      <Link href='/colors' className='text-heading-xl font-medium flex items-center gap-2 hover:underline'>
        <span>Colors</span>
        <Icon name="ArrowRightIcon" color='currentColor' />
      </Link>
      <Link href='/typography' className='text-heading-xl font-medium flex items-center gap-2 hover:underline'>
        <span>Typography</span>
        <Icon name="ArrowRightIcon" color='currentColor' />
      </Link>
      <Link href='/icons' className='text-heading-xl font-medium flex items-center gap-2 hover:underline'>
        <span>Icons</span>
        <Icon name="ArrowRightIcon" color='currentColor' />
      </Link>
      <Link href='/ui' className='text-heading-xl font-medium flex items-center gap-2 hover:underline'>
        <span>UI</span>
        <Icon name="ArrowRightIcon" color='currentColor' />
      </Link>
    </div>
  );
}
