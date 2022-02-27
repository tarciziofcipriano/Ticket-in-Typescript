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
    <img
      width="119.333px"
      height="35.333px"
      style={{
        imageRendering: '-webkit-optimize-contrast',
      }}
      src="data:image/png;base64,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"
    />
  </div>
));
