import React, { memo } from 'react';
import { FormattedDate, FormattedMessage, FormattedNumber, FormattedTime } from 'react-intl';
import { Information } from './Information';

interface TicketProps {
  id: string;
  event: {
    name: string;
    subtitle?: string;
    startAt?: Date;
    venue?: {
      name?: string;
      location?: string;
    };
  };
  name: string;
  description?: string;
  notes?: string[];
  token: string;
  pricing: {
    free?: boolean;
    price?: {
      currency: string;
      amount: number;
    };
    fee?: {
      currency: string;
      amount: number;
    };
    total?: {
      currency: string;
      amount: number;
    };
    tier?: string;
  };
  validFrom?: Date;
  validUntil?: Date;
  fields?: Array<{
    name: string;
    value: string;
  }>;
}

export const Ticket = memo<TicketProps>(({
  id, event, name, description, notes, token, pricing, validFrom, validUntil, fields,
}) => {
  const formatId = id.replaceAll('-', '').replaceAll(' ', '');
  const tokenId = `${formatId.slice(0, 10)} ${formatId.slice(10)}`;
  const shortId = `${formatId.slice(0, 2)} ${formatId.slice(2, 4)} ${formatId.slice(4, 6)} ${formatId.slice(6, 8)} ${formatId.slice(8, 10)}`;

  return (
    <div
      style={{
        display: 'flex',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#000000',
        borderRadius: 5,
        padding: '20px 22px',
      }}
    >
      <div
        style={{
          flex: '90%',
          paddingRight: 24,
        }}
      >
        <p
          style={{
            fontSize: 20,
            fontWeight: 700,
            margin: 0,
            textTransform: 'uppercase',
          }}
        >
          {event.name}
        </p>
        {(event.subtitle !== undefined) && (
          <p
            style={{
              fontSize: 12,
              margin: 0,
              paddingTop: 2,
            }}
          >
            {event.subtitle}
          </p>
        )}
        {(event !== undefined && event.startAt !== undefined) && (
          <p
            style={{
              fontSize: 12,
              margin: 0,
              paddingTop: 8,
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
                    day="2-digit"
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
        )}
        {event.venue !== undefined && (
          <p
            style={{
              fontSize: 12,
              margin: 0,
              paddingTop: 4,
            }}
          >
            {event.venue.name !== undefined ? event.venue.name : ''}
            {event.venue.name !== undefined && event.venue.location !== undefined ? ' - ' : ''}
            {event.venue.location !== undefined ? event.venue.location : ''}
          </p>
        )}
        <div
          style={{
            padding: '18px 0px 12px',
          }}
        >
          <p
            style={{
              fontSize: 17,
              fontWeight: 700,
              margin: 0,
              textTransform: 'uppercase',
            }}
          >
            {name}
          </p>
          {(description !== undefined) && (
            <p
              style={{
                fontSize: 12,
                margin: 0,
              }}
            >
              {description}
            </p>
          )}
        </div>
        <div
          style={{
            display: 'block',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            {pricing.price && (
              <Information
                name={
                  <FormattedMessage
                    id="pricing.price.text"
                    defaultMessage="VALOR"
                  />
                }
                value={
                  <FormattedNumber
                    value={pricing.price.amount}
                    style="currency"
                    currency={pricing.price.currency}
                    minimumFractionDigits={2}
                  />
                }
              />
            )}
            {pricing.fee && (
              <Information
                name={
                  <FormattedMessage
                    id="pricing.fee.text"
                    defaultMessage="TAXA"
                  />
                }
                value={
                  <FormattedNumber
                    value={pricing.fee.amount}
                    style="currency"
                    currency={pricing.fee.currency}
                    minimumFractionDigits={2}
                  />
                }
              />
            )}
            {pricing.total && (
              <Information
                name={
                  <FormattedMessage
                    id="ticket.pricing.amount.total.text"
                    defaultMessage="TOTAL"
                  />
                }
                value={
                  <FormattedNumber
                    value={pricing.total.amount}
                    style="currency"
                    currency={pricing.total.currency}
                    minimumFractionDigits={2}
                  />
                }
              />
            )}
            {pricing.tier && (
              <Information
                name={
                  <FormattedMessage
                    id="ticket.pricing.tier.text"
                    defaultMessage="LOTE"
                  />
                }
                value={
                  <FormattedMessage
                    id="ticket.pricing.tier"
                    defaultMessage={pricing.tier}
                  />
                }
              />
            )}
          </div>
          {(validFrom !== undefined || validUntil !== undefined) && (
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
              }}
            >
              {validFrom !== undefined && (
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                  }}
                >
                  <Information
                    name={
                      <FormattedMessage
                        id="validFrom"
                        defaultMessage="Início da Validade"
                      />
                    }
                    value={
                      <FormattedDate
                        value={validFrom}
                        day="2-digit"
                        month="2-digit"
                        year="2-digit"
                        hour="2-digit"
                        minute="2-digit"
                      />
                    }
                  />
                </div>
              )}
              {validUntil !== undefined && (
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                  }}
                >
                  <Information
                    name={
                      <FormattedMessage
                        id="validFrom"
                        defaultMessage="Hora da Expiração"
                      />
                    }
                    value={
                      <FormattedDate
                        value={validUntil}
                        day="2-digit"
                        month="2-digit"
                        year="2-digit"
                        hour="2-digit"
                        minute="2-digit"
                      />
                    }
                  />
                </div>
              )}
            </div>
          )}
        </div>
        {fields !== undefined && (
          <div
            style={{
              display: 'flex',
              whiteSpace: 'nowrap',
              flexWrap: 'wrap',
            }}
          >
            {fields.map((field: { name: string, value: string }, i: number) => (
              <Information
                key={i}
                name={field.name}
                value={field.value}
              />
            ))}
          </div>
        )}
        {notes !== undefined && (
          <div
            style={{
              display: 'block',
            }}
          >
            {notes.map((note: string, i: number) => (
              <p
                key={i}
                style={{
                  fontSize: 12,
                  margin: 0,
                  paddingTop: 8,
                }}
              >
                {note}
              </p>
            ))}
          </div>
        )}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: '10%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1,
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              paddingTop: 20
            }}
          >
            <div
              style={{
                display: 'block',
                justifyContent: 'flex-end',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  style={{
                    minWidth: 175,
                    maxWidth: 175,
                    minHeight: 175,
                    maxHeight: 175,
                  }}
                  src={token}
                />
              </div>
              <p
                style={{
                  fontSize: 9.2,
                  margin: 0,
                  paddingTop: 2,
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
                {tokenId}
              </p>
            </div>
            <div>
              <p
                style={{
                  fontSize: 18,
                  fontWeight: 600,
                  margin: 0,
                  textAlign: 'left',
                  writingMode: 'vertical-rl',
                  textTransform: 'uppercase',
                  lineHeight: '12px',
                  paddingLeft: 4,
                }}
              >
                {shortId}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
