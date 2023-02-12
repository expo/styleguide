import * as UI from "@expo/styleguide-icons";

export default function Icons() {
  const iconNames = Object.keys(UI).filter((key) => key.endsWith("Icon"));
  return (
    <div className='p-8'>
      <h1 className='text-heading-5xl font-black'>Icons</h1>
      <div className='mt-8 grid grid-cols-4 grid-rows-[repeat(100,_minmax(0,_1fr))] gap-6'>
        {iconNames.map((iconName) => {
          const Icon = UI[iconName as keyof typeof UI];
          return (
            <div
              className='flex flex-col items-center justify-center gap-2'
              key={iconName}
            >
              <Icon color='currentColor' />
              <span className='text-xs text-secondary'>{iconName}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
