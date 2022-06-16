import { useEffect } from '@storybook/addons';
import { Meta } from '@storybook/react';
import React, { FunctionComponent, useState } from 'react';
import { renderToA4, TicketCategory, TicketProps } from '../../../src';

export default {
  title: 'Ticket A4',
} as Meta;

export const example1: FunctionComponent<TicketProps> = () => {
  const [html, setHtml] = useState<string>();

  useEffect(() => {
    (async () => {
      setHtml(
        await renderToA4({
          id: '08ec0f1f-0689-433a-99f4-3c78f800a567',
          category: TicketCategory.Admission,
          event: {
            name: 'Baile de formatura Arquitetura e Urbanismo UNISUL',
            startAt: new Date('2021-10-23T23:00:00.000Z'),
            venue: {
              name: 'Nova Arena',
              location: 'Florianópolis - SC',
            },
          },
          name: 'Ingresso Baile',
          notes: [
            'O evento será realizado no Espaço Arena.',
            'A Nova Arena segue todos os protocolos Evento Seguro.'
          ],
          token: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IjkxMmM0NDhhLTE4ZDktNDgwZC04M2I5LTFjNGUwNmRiMjZlMCJ9.eyJpZCI6IjBlNDQwNjM0LTI5YjEtNGU1Yi04YjJlLWYzYjA5YmUzMTAwNyIsImNpZCI6ImQwNGRmZTJjLTI0OTYtNDEwNi04ZDcxLWI3YzI3MWFiZWRlZCIsImFtdCI6eyJwcmMiOjEwMCwiZmVlIjoxMCwidHRsIjoxMTB9LCJ2ZGYiOiIyMDUwLTA2LTAyVDAwOjAwOjAwLjAwMFoiLCJ2ZHQiOiIyMDUwLTA2LTAzVDAwOjAwOjAwLjAwMFoiLCJpYXQiOiIyMDIxLTA2LTAxVDAwOjAwOjAwLjAwMFoifQ.awJT66aQDD78mnTVxQIGBzGY8YY_broMx1PMY412dyM',
          pricing: {},
          fields: [
            {
              name: 'Formando',
              value: 'João Maria',
            },
            {
              name: 'Curso',
              value: 'Arquitetura e Urbanismo',
            },
            {
              name: 'Numeração',
              value: '1/20',
            },
          ],
          owner: {
            name: 'Wesley Marrone Jr.',
            documentMasked: '999.•••.•••-99',
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

export const example2: FunctionComponent<TicketProps> = () => {
  const [html, setHtml] = useState<string>();

  useEffect(() => {
    (async () => {
      setHtml(
        await renderToA4({
          id: '08ec0f1f-0689-433a-99f4-3c78f800a567',
          category: TicketCategory.Parking,
          event: {
            name: 'Baile de formatura Arquitetura e Urbanismo UNISUL',
            startAt: new Date('2021-10-23T23:00:00.000Z'),
            venue: {
              name: 'Nova Arena',
              location: 'Florianópolis - SC',
            },
          },
          name: 'Estacionamento',
          notes: [
            'A Nova Arena segue todos os protocolos Evento Seguro.'
          ],
          token: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IjkxMmM0NDhhLTE4ZDktNDgwZC04M2I5LTFjNGUwNmRiMjZlMCJ9.eyJpZCI6IjBlNDQwNjM0LTI5YjEtNGU1Yi04YjJlLWYzYjA5YmUzMTAwNyIsImNpZCI6ImQwNGRmZTJjLTI0OTYtNDEwNi04ZDcxLWI3YzI3MWFiZWRlZCIsImFtdCI6eyJwcmMiOjEwMCwiZmVlIjoxMCwidHRsIjoxMTB9LCJ2ZGYiOiIyMDUwLTA2LTAyVDAwOjAwOjAwLjAwMFoiLCJ2ZHQiOiIyMDUwLTA2LTAzVDAwOjAwOjAwLjAwMFoiLCJpYXQiOiIyMDIxLTA2LTAxVDAwOjAwOjAwLjAwMFoifQ.awJT66aQDD78mnTVxQIGBzGY8YY_broMx1PMY412dyM',
          pricing: {},
          fields: [
            {
              name: 'Formando',
              value: 'João Maria',
            },
            {
              name: 'Curso',
              value: 'Arquitetura e Urbanismo',
            },
            {
              name: 'Numeração',
              value: '1/1',
            },
          ],
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
        await renderToA4({
          id: '08ec0f1f-0689-433a-99f4-3c78f800a567',
          category: TicketCategory.Admission,
          event: {
            name: 'Baile de formatura Arquitetura e Urbanismo UNISUL',
            startAt: new Date('2021-10-23T23:00:00.000Z'),
            venue: {
              name: 'Nova Arena',
              location: 'Florianópolis - SC',
            },
          },
          name: 'Ingresso Baile Professor',
          notes: [
            'O evento será realizado no Espaço Arena.',
            'A Nova Arena segue todos os protocolos Evento Seguro.'
          ],
          token: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IjkxMmM0NDhhLTE4ZDktNDgwZC04M2I5LTFjNGUwNmRiMjZlMCJ9.eyJpZCI6IjBlNDQwNjM0LTI5YjEtNGU1Yi04YjJlLWYzYjA5YmUzMTAwNyIsImNpZCI6ImQwNGRmZTJjLTI0OTYtNDEwNi04ZDcxLWI3YzI3MWFiZWRlZCIsImFtdCI6eyJwcmMiOjEwMCwiZmVlIjoxMCwidHRsIjoxMTB9LCJ2ZGYiOiIyMDUwLTA2LTAyVDAwOjAwOjAwLjAwMFoiLCJ2ZHQiOiIyMDUwLTA2LTAzVDAwOjAwOjAwLjAwMFoiLCJpYXQiOiIyMDIxLTA2LTAxVDAwOjAwOjAwLjAwMFoifQ.awJT66aQDD78mnTVxQIGBzGY8YY_broMx1PMY412dyM',
          pricing: {},
          fields: [
            {
              name: 'Numeração',
              value: '1/20',
            },
          ],
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
        await renderToA4({
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
