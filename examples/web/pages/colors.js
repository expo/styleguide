import { theme, palette } from '@expo/styleguide'

export default function Colors() {

  function renderPalette(colorName) {
    return (
      <div className='flex gap-4 flex-wrap'>
        <div className='flex flex-col justify-around pb-4'>
          <div>Theme</div>
          <div>Light</div>
          <div>Dark</div>
        </div>
        {Array.from(Array(14).keys()).map((index) => (
          <div key={index}>
            <div style={{ backgroundColor: theme.palette[`${colorName}${index + 1}`] }} className="w-14 h-14 mb-2 rounded-sm" />
            <div style={{ backgroundColor: palette.light[`${colorName}${index + 1}`] }} className="w-14 h-14 mb-2 rounded-sm" />
            <div style={{ backgroundColor: palette.dark[`${colorName}${index + 1}`] }} className="w-14 h-14 rounded-sm" />
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