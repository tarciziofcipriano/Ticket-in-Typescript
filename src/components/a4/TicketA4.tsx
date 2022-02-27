import React, { memo } from 'react';
import { TicketProps } from '../..';
import { Header } from './Header';
import { Owner } from './Owner';
import { Ticket } from './Ticket';

export const TicketA4 = memo<TicketProps>(({
  id, category, event, name, description, notes, token,
  pricing, validFrom, validUntil, fields, owner, issuer, createdAt,
}) => (
  <div
    style={{
      fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
      margin: '0 auto',
      maxWidth: '700px',
    }}
  >
    <Header
      category={category}
      createdAt={createdAt}
    />
    <Ticket
      id={id}
      event={event}
      name={name}
      description={description}
      notes={notes}
      token={token}
      pricing={pricing}
      validFrom={validFrom}
      validUntil={validUntil}
      fields={fields}
    />
    {owner !== undefined && (
      <Owner
        name={owner.name}
        documentMasked={owner.documentMasked}
        phoneMasked={owner.phoneMasked}
      />
    )}
    {(issuer !== undefined) && (
      <div
        style={{
          paddingTop: 12,
        }}
      >
        <p
          style={{
            fontSize: 13,
            margin: 0,
          }}
        >
          {issuer}
        </p>
      </div>
    )}
  </div>
));
