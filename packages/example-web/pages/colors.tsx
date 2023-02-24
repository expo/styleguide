function renderPalette(colorName: string) {
  return (
    <div className='flex gap-4 flex-wrap' key={colorName}>
      {Array.from(Array(12).keys()).map((index) => (
        <div key={index}>
          <div className={`w-14 h-14 rounded-sm bg-palette-${colorName}${index + 1}`}/>
          <p className='text-3xs text-secondary text-center'>{colorName}{index+1}</p>
        </div>
      ))}
    </div>
  )
}

export default function Colors() {
  return (
    <>
      <h1 className='text-heading-5xl font-black'>Colors</h1>
      <div className='grid gap-2 mt-4'>
        {['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'gray'].map(renderPalette)}
      </div>
    </>
  );
}