import QRCode from 'qrcode';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { IntlProvider } from 'react-intl';
import { Ticket80mm } from './components/80mm/Ticket80mm';
import { TicketA4 } from './components/a4/TicketA4';
import { Html } from './html/Html';

export enum TicketCategory {
  Admission = 'admission',
  Beverage = 'beverage',
  Food = 'food',
  Generic = 'generic',
  Parking = 'parking',
}

export interface TicketProps {
  id: string;
  category: TicketCategory;
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
  owner?: {
    name?: string;
    documentMasked?: string;
    phoneMasked?: string;
  };
  issuer?: string;
  createdAt: Date;
}

export async function renderToA4(props: TicketProps) {
  const {
    id, category, event, name, description, notes, token,
    pricing, validFrom, validUntil, fields, owner, issuer, createdAt,
  } = props;

  const qrcode = await QRCode.toDataURL(token, { scale: 4, margin: 0, errorCorrectionLevel: 'L' });

  return `<!Doctype html>${renderToString(
    <Html>
      {
        <IntlProvider
          locale="pt-BR"
          defaultLocale="pt-BR"
          timeZone="America/Sao_Paulo"
        >
          <TicketA4
            id={id}
            category={category}
            event={event}
            name={name}
            description={description}
            notes={notes}
            token={qrcode}
            pricing={pricing}
            validFrom={validFrom}
            validUntil={validUntil}
            fields={fields}
            owner={owner}
            issuer={issuer}
            createdAt={createdAt}
          />
        </IntlProvider>
      }
    </Html>
  )}`;
}

export async function renderTo80mm(props: TicketProps) {
  const {
    id, category, event, name, description, notes, token,
    pricing, validFrom, validUntil, fields, owner, issuer, createdAt,
  } = props;

  const qrcode = await QRCode.toDataURL(token, { scale: 4, margin: 0, errorCorrectionLevel: 'L' });

  return `<!Doctype html>${renderToString(
    <Html>
      {
        <IntlProvider
          locale="pt-BR"
          defaultLocale="pt-BR"
          timeZone="America/Sao_Paulo"
        >
          <Ticket80mm
            id={id}
            category={category}
            event={event}
            name={name}
            description={description}
            notes={notes}
            token={qrcode}
            pricing={pricing}
            validFrom={validFrom}
            validUntil={validUntil}
            fields={fields}
            owner={owner}
            issuer={issuer}
            createdAt={createdAt}
          />
        </IntlProvider>
      }
    </Html>
  )}`;
}
