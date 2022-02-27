import React, { memo } from 'react';
import { FormattedDate, FormattedMessage, FormattedTime } from 'react-intl';

interface HeaderProps {
  category: 'admission' | 'beverage' | 'food' | 'generic' | 'parking';
  createdAt: Date;
}

export const Header = memo<HeaderProps>(({ category, createdAt }) => (
  <div
    style={{
      display: 'block',
    }}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <p
        style={{
          fontSize: 12,
          margin: 0,
          textAlign: 'left',
        }}
      >
        <FormattedMessage
          id="header.createdAt"
          defaultMessage="Emitido em {date} às {time}"
          values={{
            date:
              <FormattedDate
                value={createdAt}
                day="2-digit"
                month="2-digit"
                year="numeric"
              />,
            time:
              <FormattedTime
                value={createdAt}
                hour="2-digit"
                minute="2-digit"
              />,
          }}
        />
      </p>
      <p
        style={{
          fontSize: 12,
          margin: 0,
          textAlign: 'right',
        }}
      >
        {category === 'admission' && (
          <FormattedMessage id="header.type.admission" defaultMessage="Ingresso" />
        )}
        {category === 'beverage' && (
          <FormattedMessage id="header.type.beverage" defaultMessage="Bebida" />
        )}
        {category === 'food' && (
          <FormattedMessage id="header.type.food" defaultMessage="Alimentação" />
        )}
        {category === 'generic' && (
          <FormattedMessage id="header.type.generic" defaultMessage="Diverso" />
        )}
        {category === 'parking' && (
          <FormattedMessage id="header.type.parking" defaultMessage="Estacionamento" />
        )}
      </p>
    </div>
    <div
      style={{
        display: 'block',
        padding: '24px 0px',
      }}
    >
      <p
        style={{
          fontSize: 14,
          fontWeight: 700,
          margin: 0,
          paddingBottom: 4,
        }}
      >
        <FormattedMessage
          id="header.instructions"
          defaultMessage="INSTRUÇÕES"
        />
      </p>
      <ul
        style={{
          fontSize: 12,
          margin: 0,
          paddingLeft: 24,
        }}
      >
        <li
          style={{
            paddingTop: 6,
          }}
        >
          <FormattedMessage
            id="header.instructions.first"
            defaultMessage="{text} Basta apresentar este ingresso no seu celular."
            values={{
              text:
                <strong>
                  <FormattedMessage
                    id="header.instructions.first.text.strong"
                    defaultMessage="Você sabia que não precisa imprimir?"
                  />
                </strong>
            }}
          />
        </li>
        <li
          style={{
            paddingTop: 6,
          }}
        >
          <FormattedMessage
            id="header.instructions.second"
            defaultMessage="Imprima em folha {text} (297 x 210 mm) e não utilize o modo econômico."
            values={{
              text:
                <strong>
                  <FormattedMessage
                    id="header.instructions.second.text.strong"
                    defaultMessage="A4"
                  />
                </strong>
            }}
          />
        </li>
        <li
          style={{
            paddingTop: 6,
          }}
        >
          <FormattedMessage
            id="header.instructions.third"
            defaultMessage="{text} ou dobre o QR code impresso."
            values={{
              text:
                <strong>
                  <FormattedMessage
                    id="header.instructions.third.text.strong"
                    defaultMessage="Não rasure"
                  />
                </strong>
            }}
          />
        </li>
        <li
          style={{
            paddingTop: 6,
          }}
        >
          <FormattedMessage
            id="header.instructions.fourth"
            defaultMessage="Tenha em mãos um {text} com foto."
            values={{
              text:
                <strong>
                  <FormattedMessage
                    id="header.instructions.fourth.text.strong"
                    defaultMessage="documento oficial"
                  />
                </strong>
            }}
          />
        </li>
      </ul>
    </div>
  </div>
));
