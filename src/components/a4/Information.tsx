import React, { memo } from 'react';

interface InformationProps {
  name: React.ReactNode;
  value: React.ReactNode;
}

export const Information = memo<InformationProps>(({ name, value }) => (
  <div
    style={{
      padding: '6px 40px 6px 0px',
    }}
  >
    <p
      style={{
        fontSize: 12,
        fontWeight: 700,
        margin: 0,
        textTransform: 'uppercase',
      }}
    >
      {name}
    </p>
    <p
      style={{
        fontSize: 13,
        margin: 0,
      }}
    >
      {value}
    </p>
  </div>
));
