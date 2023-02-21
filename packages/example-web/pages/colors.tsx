import { theme } from '@expo/styleguide'

function renderPalette(colorName: string) {
  return (
    <div className='flex gap-4 flex-wrap' key={colorName}>
      {Array.from(Array(12).keys()).map((index) => (
        <div key={index}>
          <div
            style={{ backgroundColor: theme.palette[`${colorName}${index + 1}` as keyof typeof theme.palette]}}
            className="w-14 h-14 rounded-sm"
          />
          <p className='text-3xs'>{colorName}{index+1}</p>
        </div>
      ))}
    </div>
  )
}

export default function Colors() {
  return (
    <>
      <h1 className='text-heading-5xl font-black'>Colors</h1>
      <div className='grid gap-4 mt-4'>
        {['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'gray'].map(renderPalette)}
      </div>
    </>
  );
}