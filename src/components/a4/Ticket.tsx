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
            justifyContent: 'flex-end',
          }}
        >
          <img
            width="119.333px"
            height="35.333px"
            style={{
              imageRendering: '-webkit-optimize-contrast',
            }}
            src="data:image/png;base64,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"
          />
        </div>
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
                  width="30px"
                  height="30px"
                  style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    border: '3px solid #FFFFFF',
                    borderRadius: '50%',
                    imageRendering: '-webkit-optimize-contrast'
                  }}
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADlQTFRFQEBAn5+fEBAQ39/f7+/vv7+/YGBgMDAwz8/PcHBwgICAUFBQr6+vICAgj4+Pf39/////AAAA////Rnc6vwAAABN0Uk5T////////////////////////ALJ93AgAAAKySURBVHjatJrbmqsgDIXDSbCeYN7/Ybd1W7WKybJKruZC/281wgokQ38Fg5CHTDs0lJagZmjNI3CjGp0yoRtl7sFt7xMTvrc/w12VxKjcT3BHCQpyl+EBRE/4cAlu63QpaovDW50uhm5B+FXZ5+KPcOPTT+GNDA86/Rg6SHCVboTi4bfYBzo9yd7T6VH2jr6Fh/RAhDzc6Cfg2uTg1qdHwtsMvE4PRX2Et8BrHRHy89o93AIJ7+MYQcZru4PXIDtGQEb9DQdWoY5zvOD1OMOBuvP6wA1Qm7ZwBwi3H3gE6rbbwK8IvyCdQOHJrHBY+gRHzicbdgTEVB+4vSg8RiCNdob3F4VD0vsZDmxp9w2P8iv+Pxz5+Dt2BMqKmeDquvAYO6QmjfBG/okHNiC9meCyEamFGZa/xLf0Gy6nvFv1rsl/AUknoEqozSJZsi87bzvCB9hr38u7wqUPI7zBLYu2W9XIX5RER1y91n3v1Up0RvrDhVffLiNKB+B72AuWLsMPadil6RZ8EW7zH/gOPLP0NOq8Ijy3aRTovBI8u9070L4kuMt6rMKcV4CfaPSYdAF+JtFBzstv/9PkQs5LvHGp0xWNOG/DWi6zFxHnHdhiwW1FwL5arsytwgNgOfkyd1qga/Z9Ubpmjxb866LzNtyhSPjhovMq7jh39Fr8c6/HufxBtJEWW8c7r+eO0PI24Z23Zw7/wAbnndcy1xYHuCrnvBVz4YLqATEPOeaqiJWD8+9C3CXXQdWAzl2Tu5477PQQTh4jtrGgsMNDdZKWwLZEOotdOGfpNdsSOTRz/DsxVrxa6+mxWmjmHGuGJ6g/Pz6mpTZU2QZa2dZf0aZl2XZr2UZx2RZ32eZ82bFC2YFI2VFO2SFU2fFZ4cFf2ZFl4WFr4TFx4QF34dF86X8quBP/BBgAXdgipG1tZhQAAAAASUVORK5CYII="
                />
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
