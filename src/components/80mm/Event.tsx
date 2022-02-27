import React, { memo } from 'react';
import { FormattedDate, FormattedMessage, FormattedTime } from 'react-intl';

interface EventProps {
  event: {
    name: string;
    subtitle?: string;
    startAt?: Date;
    venue?: {
      name?: string;
      location?: string;
    };
  };
}

export const Event = memo<EventProps>(({ event }) => (
  <div
    style={{
      padding: '0px 30px',
    }}
  >
    <p
      style={{
        fontSize: 37,
        fontWeight: 600,
        margin: 0,
        lineHeight: '36px',
        padding: '0px 20px',
      }}
    >
      {event.name}
    </p>
    {event.subtitle !== undefined && (
      <p
        style={{
          fontSize: 18,
          margin: 0,
          paddingTop: 6,
        }}
      >
        {event.subtitle}
      </p>
    )}
    {event !== undefined && event.startAt !== undefined && (
      <div
        style={{
          paddingTop: 24,
        }}
      >
        <p
          style={{
            fontSize: 21,
            fontWeight: 600,
            margin: 0,
          }}
        >
          <style>
            {`:first-letter {
                text-transform: uppercase;
            }`}
          </style>
          <FormattedMessage
            id="event.startAt"
            defaultMessage="{date}, {time}"
            values={{
              date:
                <FormattedDate
                  value={event.startAt}
                  weekday="long"
                  day="numeric"
                  month="long"
                  year="numeric"
                />,
              time:
                <FormattedTime
                  value={event.startAt}
                  hour="2-digit"
                />
            }}
          />h
        </p>
      </div>
    )}
    {event.venue !== undefined && (
      <div
        style={{
          paddingTop: event !== undefined && event.startAt !== undefined ? 6 : 24,
        }}
      >
        {event.venue.name !== undefined && (
          <p
            style={{
              fontSize: 21,
              margin: 0,
            }}
          >
            {event.venue.name}
          </p>
        )}
        {event.venue.location !== undefined && (
          <p
            style={{
              fontSize: 21,
              margin: 0,
              paddingTop: 4,
            }}
          >
            {event.venue.location}
          </p>
        )}
      </div>
    )}
  </div>
));
