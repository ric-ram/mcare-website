import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';

interface AppointmentEmailProps {
  name: string;
  email: string;
  fullPhone: string;
  message: string;
}

export const AppointmentEmail = ({
  name,
  email,
  fullPhone,
  message,
}: AppointmentEmailProps) => {
  const previewText = `Tentativa de marcação de ${name}!`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>

      <Body style={main}>
        <Section style={main}>
          <Container style={container}>
            <Section>
              <Img
                src={process.env.NEXT_PUBLIC_LOGO_URL}
                width='96'
                height='30'
                alt='Airbnb'
              />
            </Section>
            <Section style={{ paddingBottom: '20px' }}>
              <Row>
                <Text style={heading}>{name} escreveu:</Text>
                <Text style={review}>{message}</Text>
                <Text style={paragraph}>
                  Para que possas entrar em contacto com a pessoa, em baixo
                  estão os seus dados:
                </Text>
                <Text style={paragraph}>
                  <b>Nome: </b>
                  {name}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Email: </b>
                  {email}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Telemóvel: </b>
                  {fullPhone}
                </Text>
              </Row>
            </Section>

            <Hr style={hr} />

            <Section>
              <Row>
                <Text style={footer}>MCare</Text>
              </Row>
            </Section>
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

export default AppointmentEmail;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
};

const heading = {
  fontSize: '32px',
  lineHeight: '1.3',
  fontWeight: '700',
  color: '#484848',
};

const paragraph = {
  fontSize: '18px',
  lineHeight: '1.4',
  color: '#484848',
};

const review = {
  ...paragraph,
  padding: '24px',
  backgroundColor: '#f2f3f3',
  borderRadius: '4px',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  color: '#9ca299',
  fontSize: '14px',
  marginBottom: '10px',
};
