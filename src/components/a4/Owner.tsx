import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import { Information } from './Information';

interface OwnerProps {
  name?: string;
  documentMasked?: string;
  phoneMasked?: string;
}

export const Owner = memo<OwnerProps>(({ name, documentMasked, phoneMasked }) => (
  <div
    style={{
      borderBottomWidth: '1px',
      borderBottomStyle: 'solid',
      borderBottomColor: '#000000',
      padding: '12px 0',
    }}
  >
    <p
      style={{
        fontSize: 12,
        fontWeight: 700,
        margin: 0,
      }}
    >
      <FormattedMessage
        id="owner.title"
        defaultMessage="DADOS DA CONTA"
      />
    </p>
    <div
      style={{
        display: 'flex',
        padding: '2px 22px',
      }}
    >
      {(name !== undefined) && (
        <Information
          name={
            <FormattedMessage
              id="owner.name"
              defaultMessage="NOME"
            />
          }
          value={name}
        />
      )}
      {(documentMasked !== undefined) && (
        <Information
          name={
            <FormattedMessage
              id="owner.document"
              defaultMessage="DOCUMENTO"
            />
          }
          value={documentMasked}
        />
      )}
      {(phoneMasked !== undefined) && (
        <Information
          name={
            <FormattedMessage
              id="owner.phoneMasked"
              defaultMessage="TELEFONE"
            />
          }
          value={phoneMasked}
        />
      )}
    </div>
  </div>
));
