import { theme } from '@expo/styleguide'

export default function Colors() {

  function renderPalette(colorName: string) {
    return (
      <div className='flex gap-4 flex-wrap'>
        {Array.from(Array(12).keys()).map((index) => (
          <div key={index}>
            <div style={{ backgroundColor: theme.palette[`${colorName}${index + 1}` as keyof typeof theme.palette]}} className="w-14 h-14 rounded-sm" />
            <p className='text-3xs'>{colorName}{index+1}</p>
          </div>
        ))}
      </div>
    )
  }

 return (
    <div className='grid gap-2 p-4'>
      {renderPalette('red')}
      {renderPalette('orange')}
      {renderPalette('yellow')}
      {renderPalette('green')}
      {renderPalette('blue')}
      {renderPalette('purple')}
      {renderPalette('pink')}
      {renderPalette('gray')}
    </div>
  )
}