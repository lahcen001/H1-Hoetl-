import React from 'react'
import { ConfigProvider} from 'antd';

export default function themeProvider({children}:{children:React.ReactNode}) {
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#000000',
           borderRadius: 1,

          },
          components: {
            Button : {
                controlHeight :42,
                defaultBorderColor : '#000000',
            },
            Input : {
                controlHeight :42,
                activeShadow : 'none',
                boxShadow : 'none',
                colorBorder : '#ccc',
            }
              
          }
        }}
      >
        {children}
      </ConfigProvider>
    </div>
  )
}
