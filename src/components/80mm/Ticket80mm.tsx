import React, { memo } from 'react';
import { TicketProps } from '../..';
import { Event } from './Event';
import { Ticket } from './Ticket';

export const Ticket80mm = memo<TicketProps>(({
  id, event, name, description, notes, token,
  pricing, validFrom, validUntil, fields, owner, issuer, createdAt,
}) => (
  <div
    style={{
      fontFamily: 'Open Sans, Helvetica, Arial, sans-serif',
      margin: '0 auto',
      maxWidth: '590px',
      textAlign: 'center',
    }}
  >
    <Event
      event={event}
    />
    <Ticket
      id={id}
      name={name}
      description={description}
      notes={notes}
      token={token}
      pricing={pricing}
      validFrom={validFrom}
      validUntil={validUntil}
      fields={fields}
      owner={owner}
    />
  </div>
));
