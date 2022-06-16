import React, { memo } from "react";
import { FormattedDate, FormattedMessage, FormattedNumber } from "react-intl";
import { Information } from "./Information";

interface TicketProps {
  id: string;
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
  owner?: {
    name?: string;
    documentMasked?: string;
    phoneMasked?: string;
  };
}

export const Ticket = memo<TicketProps>(
  ({
    id,
    name,
    description,
    notes,
    token,
    pricing,
    validFrom,
    validUntil,
    fields,
    owner,
  }) => {
    const formatId = id.replaceAll("-", "").replaceAll(" ", "");
    const tokenId = `${formatId.slice(0, 10)} ${formatId.slice(10)}`;
    const shortId = `${formatId.slice(0, 2)} ${formatId.slice(
      2,
      4
    )} ${formatId.slice(4, 6)} ${formatId.slice(6, 8)} ${formatId.slice(
      8,
      10
    )}`;

    return (
      <div
        style={{
          padding: "34px 30px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: 30,
          }}
        >
          <div
            style={{
              display: "block",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
            <img
              style={{
                minWidth: 275,
                maxWidth: 275,
                minHeight: 275,
                maxHeight: 275,
              }}
              src={token}
            />
          </div>
          <p
            style={{
              fontSize: 14.5,
              margin: 0,
              paddingTop: 2,
                textTransform: "uppercase",
              }}
            >
              {tokenId}
            </p>
          </div>
          <p
            style={{
              fontSize: 30,
              fontWeight: 600,
              margin: 0,
              textAlign: "left",
              writingMode: "vertical-rl",
              textTransform: "uppercase",
              lineHeight: "12px",
              paddingLeft: 12,
            }}
          >
            {shortId}
          </p>
        </div>
        <div
          style={{
            borderStyle: "solid",
            borderColor: "black",
            borderWidth: "2px",
            borderRadius: "8px",
            textAlign: "left",
            padding: "20px",
          }}
        >
          <div
            style={{
              paddingBottom: "16px",
            }}
          >
            <p
              style={{
                fontSize: 28,
                fontWeight: 700,
                margin: 0,
              }}
            >
              {name}
            </p>
            {description !== undefined && (
              <p
                style={{
                  fontSize: 20,
                  margin: 0,
                }}
              >
                {description}
              </p>
            )}
          </div>
          <div
            style={{
              display: "block",
            }}
          >
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
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
                      id="pricing.total.text"
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
                      id="ticket.tier.name.text"
                      defaultMessage="LOTE"
                    />
                  }
                  value={
                    <FormattedMessage
                      id="ticket.tier.name"
                      defaultMessage={pricing.tier}
                    />
                  }
                />
              )}
              {validFrom !== undefined && (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
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
                    display: "flex",
                    flexWrap: "wrap",
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
              {fields !== undefined && (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  {fields.map(
                    (field: { name: string; value: string }, i: number) => (
                      <Information
                        key={i}
                        name={field.name}
                        value={field.value}
                      />
                    )
                  )}
                </div>
              )}
              {owner !== undefined && (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  {owner.name !== undefined && (
                    <Information
                      name={
                        <FormattedMessage
                          id="owner.name"
                          defaultMessage="NOME"
                        />
                      }
                      value={owner.name}
                    />
                  )}
                  {owner.documentMasked !== undefined && (
                    <Information
                      name={
                        <FormattedMessage
                          id="owner.document"
                          defaultMessage="DOCUMENTO"
                        />
                      }
                      value={owner.documentMasked}
                    />
                  )}
                  {owner.phoneMasked !== undefined && (
                    <Information
                      name={
                        <FormattedMessage
                          id="owner.phoneMasked"
                          defaultMessage="TELEFONE"
                        />
                      }
                      value={owner.phoneMasked}
                    />
                  )}
                </div>
              )}
            </div>
            {notes !== undefined && (
              <div
                style={{
                  display: "block",
                }}
              >
                {notes.map((note: string, i: number) => (
                  <p
                    key={i}
                    style={{
                      fontSize: 18,
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
        </div>
      </div>
    );
  }
);