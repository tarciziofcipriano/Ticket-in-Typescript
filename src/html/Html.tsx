import React, { memo } from 'react';
import { OpenSansStyle } from './style';

export const Html = memo(({ children }) => (
  <html>
    <head>
      <meta
        charSet="utf-8"
      />
      <meta
        httpEquiv="X-UA-Compatible"
        content="IE=edge,chrome=1"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <style>
        {OpenSansStyle}
      </style>
    </head>
    <body
      style={{
        margin: 0,
      }}
    >
      {children}
    </body>
  </html>
));
