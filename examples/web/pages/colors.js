import { theme } from '@expo/styleguide'

import Header from "../components/Header";

export default function Colors() {
  return (
    <>
      <Header>Colors</Header>
      <div className='grid gap-2 p-4'>
        {['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'gray'].map(colorName => (
          <div className='flex gap-4 flex-wrap' key={colorName}>
            {Array.from(Array(12).keys()).map((index) => (
              <div key={`${colorName}-${index}`}>
                <div style={{ backgroundColor: theme.palette[`${colorName}${index + 1}`] }} className="w-14 h-14 rounded-sm" />
                <p className='text-3xs'>{colorName}{index + 1}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}