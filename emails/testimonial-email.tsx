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

interface TestimonialEmailProps {
  name: string;
  email: string;
  testimonial: string;
  imageName?: string;
  imageSrc?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const TestimonialEmail = ({
  name,
  email,
  testimonial,
  imageName,
  imageSrc,
}: TestimonialEmailProps) => {
  const previewText = `Novo testemunho de ${name}!`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>

      <Body style={main}>
        <Section style={main}>
          <Container style={container}>
            <Section>
              <Img
                src={`${baseUrl}/static/airbnb-logo.png`}
                width='96'
                height='30'
                alt='Airbnb'
              />
            </Section>
            {imageName && (
              <Section>
                <Img
                  src={imageSrc}
                  width='96'
                  height='96'
                  alt={imageName}
                  style={testimonialImage}
                />
                {/* <Text style={paragraph}>{imageName}</Text> */}
              </Section>
            )}
            <Section style={{ paddingBottom: '20px' }}>
              <Row>
                <Text style={heading}>O testemunho de {name}:</Text>
                <Text style={review}>{testimonial}</Text>
                <Text style={paragraph}>
                  Se queres que este testemunho apareça no site, nâo te esqueças
                  de ir ao teu painel de controlo (base de dados) e aprovar o
                  testemunho e marcá-lo como testemunho a aparecer no site.
                </Text>
                <Text style={paragraph}>
                  Caso queiras entrar em contacto com o cliente, os dados do
                  cliente são os seguintes:
                </Text>
                <Text style={paragraph}>
                  <b>Nome: </b>
                  {name}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Email: </b>
                  {email}
                </Text>

                {/* <Button pY={19} style={button} href='https://airbnb.com/'>
                  Send My Feedback
                </Button> */}
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

export default TestimonialEmail;

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

const testimonialImage = {
  margin: '0 auto',
  marginBottom: '16px',
  borderRadius: '50%',
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

const button = {
  backgroundColor: '#ff5a5f',
  borderRadius: '3px',
  color: '#fff',
  fontSize: '18px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  width: '100%',
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
