import { Meta } from '@storybook/react';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { renderTo80mm, TicketCategory, TicketProps } from '../../../src';

export default {
  title: 'Ticket 80mm',
} as Meta;

export const example1: FunctionComponent<TicketProps> = () => {
  const [html, setHtml] = useState<string>();

  useEffect(() => {
    (async () => {
      setHtml(
        await renderTo80mm({
          id: '08ec0f1f-0689-433a-99f4-3c78f800a567',
          category: TicketCategory.Admission,
          event: {
            name: 'Setanejo',
            subtitle: 'Todos os cantos',
            startAt: new Date('2021-10-23T23:00:00.000Z'),
            venue: {
              name: 'Nova Arena',
              location: 'Florianópolis - SC',
            },
          },
          name: 'Ingresso Pista Inteira',
          description: 'Em frente ao palco',
          token: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IjkxMmM0NDhhLTE4ZDktNDgwZC04M2I5LTFjNGUwNmRiMjZlMCJ9.eyJpZCI6IjBlNDQwNjM0LTI5YjEtNGU1Yi04YjJlLWYzYjA5YmUzMTAwNyIsImNpZCI6ImQwNGRmZTJjLTI0OTYtNDEwNi04ZDcxLWI3YzI3MWFiZWRlZCIsImFtdCI6eyJwcmMiOjEwMCwiZmVlIjoxMCwidHRsIjoxMTB9LCJ2ZGYiOiIyMDUwLTA2LTAyVDAwOjAwOjAwLjAwMFoiLCJ2ZHQiOiIyMDUwLTA2LTAzVDAwOjAwOjAwLjAwMFoiLCJpYXQiOiIyMDIxLTA2LTAxVDAwOjAwOjAwLjAwMFoifQ.awJT66aQDD78mnTVxQIGBzGY8YY_broMx1PMY412dyM',
          pricing: {
            free: false,
            price: {
              currency: 'BRL',
              amount: 70,
            },
            fee: {
              currency: 'BRL',
              amount: 7,
            },
            total: {
              currency: 'BRL',
              amount: 77,
            },
            tier: 'Lote Promocional',
          },
          validFrom: new Date('2021-10-23T20:00:00.000Z'),
          validUntil: new Date('2021-10-24T09:00:00.000Z'),
          fields: [
            {
              name: 'Setor',
              value: 'Amarelo',
            },
            {
              name: 'Mesa',
              value: '37',
            },
          ],
          owner: {
            name: 'Wesley Marrone Jr.',
            documentMasked: '999.•••.•••-99',
            phoneMasked: '(48) •••••-0000',
          },
          issuer: 'Nova Arena - CNPJ: 00.000.000/0000-00',
          createdAt: new Date(),
        })
      );
    })()
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: html ?? '' }}
    />
  );
}

export const example2: FunctionComponent<TicketProps> = () => {
  const [html, setHtml] = useState<string>();

  useEffect(() => {
    (async () => {
      setHtml(
        await renderTo80mm({
          id: '08ec0f1f-0689-433a-99f4-3c78f800a567',
          category: TicketCategory.Parking,
          event: {
            name: 'Setanejo',
            subtitle: 'Todos os cantos',
            venue: {
              name: 'Nova Arena',
            },
          },
          name: 'Estacionamento Coberto',
          token: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IjkxMmM0NDhhLTE4ZDktNDgwZC04M2I5LTFjNGUwNmRiMjZlMCJ9.eyJpZCI6IjBlNDQwNjM0LTI5YjEtNGU1Yi04YjJlLWYzYjA5YmUzMTAwNyIsImNpZCI6ImQwNGRmZTJjLTI0OTYtNDEwNi04ZDcxLWI3YzI3MWFiZWRlZCIsImFtdCI6eyJwcmMiOjEwMCwiZmVlIjoxMCwidHRsIjoxMTB9LCJ2ZGYiOiIyMDUwLTA2LTAyVDAwOjAwOjAwLjAwMFoiLCJ2ZHQiOiIyMDUwLTA2LTAzVDAwOjAwOjAwLjAwMFoiLCJpYXQiOiIyMDIxLTA2LTAxVDAwOjAwOjAwLjAwMFoifQ.awJT66aQDD78mnTVxQIGBzGY8YY_broMx1PMY412dyM',
          pricing: {
            free: true,
            total: {
              currency: 'BRL',
              amount: 20,
            },
            tier: 'Lote Promocional',
          },
          fields: [
            {
              name: 'Placa',
              value: 'XYZ1A23',
            },
          ],
          owner: {
            name: 'Wesley Marrone Jr.',
            phoneMasked: '(48) •••••-0000',
          },
          createdAt: new Date(),
        })
      );
    })()
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: html ?? '' }}
    />
  );
}

export const example3: FunctionComponent<TicketProps> = () => {
  const [html, setHtml] = useState<string>();

  useEffect(() => {
    (async () => {
      setHtml(
        await renderTo80mm({
          id: '7b24b44e-ec47-43e7-91e1-c3d0d22d5af0',
          category: TicketCategory.Beverage,
          event: {
            name: 'Super Festival Sertanejo + Rock',
          },
          name: 'Cerveja Brahma Lata 350ML',
          notes: ['Venda proibida para menores de 18 anos.'],
          token: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IjkxMmM0NDhhLTE4ZDktNDgwZC04M2I5LTFjNGUwNmRiMjZlMCJ9.eyJpZCI6IjBlNDQwNjM0LTI5YjEtNGU1Yi04YjJlLWYzYjA5YmUzMTAwNyIsImNpZCI6ImQwNGRmZTJjLTI0OTYtNDEwNi04ZDcxLWI3YzI3MWFiZWRlZCIsImFtdCI6eyJwcmMiOjEwMCwiZmVlIjoxMCwidHRsIjoxMTB9LCJ2ZGYiOiIyMDUwLTA2LTAyVDAwOjAwOjAwLjAwMFoiLCJ2ZHQiOiIyMDUwLTA2LTAzVDAwOjAwOjAwLjAwMFoiLCJpYXQiOiIyMDIxLTA2LTAxVDAwOjAwOjAwLjAwMFoifQ.awJT66aQDD78mnTVxQIGBzGY8YY_broMx1PMY412dyM',
          pricing: {
            price: {
              currency: 'BRL',
              amount: 8,
            },
            total: {
              currency: 'BRL',
              amount: 8,
            },
          },
          validUntil: new Date('2021-10-24T09:00:00.000Z'),
          createdAt: new Date(),
        })
      );
    })()
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: html ?? '' }}
    />
  );
}

export const example4: FunctionComponent<TicketProps> = () => {
  const [html, setHtml] = useState<string>();

  useEffect(() => {
    (async () => {
      setHtml(
        await renderTo80mm({
          id: '7b24b44e-ec47-43e7-91e1-c3d0d22d5af0',
          category: TicketCategory.Generic,
          event: {
            name: 'Super Festival Sertanejo + Rock',
            venue: {},
          },
          name: 'Balde de Gelo',
          token: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IjkxMmM0NDhhLTE4ZDktNDgwZC04M2I5LTFjNGUwNmRiMjZlMCJ9.eyJpZCI6IjBlNDQwNjM0LTI5YjEtNGU1Yi04YjJlLWYzYjA5YmUzMTAwNyIsImNpZCI6ImQwNGRmZTJjLTI0OTYtNDEwNi04ZDcxLWI3YzI3MWFiZWRlZCIsImFtdCI6eyJwcmMiOjEwMCwiZmVlIjoxMCwidHRsIjoxMTB9LCJ2ZGYiOiIyMDUwLTA2LTAyVDAwOjAwOjAwLjAwMFoiLCJ2ZHQiOiIyMDUwLTA2LTAzVDAwOjAwOjAwLjAwMFoiLCJpYXQiOiIyMDIxLTA2LTAxVDAwOjAwOjAwLjAwMFoifQ.awJT66aQDD78mnTVxQIGBzGY8YY_broMx1PMY412dyM',
          pricing: {
            total: {
              currency: 'BRL',
              amount: 5,
            },
          },
          owner: {},
          createdAt: new Date(),
        })
      );
    })()
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: html ?? '' }}
    />
  );
}
