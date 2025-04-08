import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';

interface ContactFormEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactFormEmail = ({
  name,
  email,
  subject,
  message,
}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>New contact form submission from {name}</Preview>
        <Container>
          <Section style={logo}>
            <div style={logoContainer}>
              <span style={logoText}>
                <h1 className='text-lg font-candara-bold'>aa-aspect</h1>
              </span>
            </div>
          </Section>

          <Section style={content}>
            <Row style={{ ...boxInfos, paddingBottom: '0' }}>
              <Column>
                <Heading style={heading}>
                  Hi {name},
                </Heading>
                <Heading as="h2" style={subheading}>
                  Thank you for contacting AA Aspect!
                </Heading>

                <Text style={paragraph}>
                  We have received your enquiry with the following details:
                </Text>

                <Text style={{ ...paragraph, marginTop: 20 }}>
                  <b>Subject: </b>
                  {subject}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Email: </b>
                  {email}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Message: </b>
                </Text>
                <Text style={messageBox}>
                  {message}
                </Text>

                <Text style={paragraph}>
                  Our team will review your message and get back to you shortly.
                </Text>
              </Column>
            </Row>
            
            <Row style={{ ...boxInfos, paddingTop: '0' }}>
              <Column style={buttonContainer}>
                <Button style={button} href="https://aa-aspect.com">
                  Visit Our Website
                </Button>
              </Column>
            </Row>
          </Section>

          <Text style={footer}>
            © {new Date().getFullYear()} | AA-Aspect, 100 Regent Place, London, EC4V 3DX, United Kingdom | www.aa-aspect.com
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

ContactFormEmail.PreviewProps = {
  name: 'John Doe',
  email: 'john@example.com',
  subject: 'General Inquiry',
  message: 'Hello, I would like to learn more about your services.',
} as ContactFormEmailProps;

export default ContactFormEmail;

const main = {
  backgroundColor: '#f5f7fa',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
  lineHeight: '24px',
  color: '#2d3748',
};

const logo = {
  padding: '10px 20px',
  textAlign: 'center' as const,
};

const logoContainer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const logoText = {
  fontSize: '20px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
  color: '#2d3748',
};

const heading = {
  fontSize: 32,
  fontWeight: 'bold',
  textAlign: 'center' as const,
  color: '#2d3748',
};

const subheading = {
  fontSize: 26,
  fontWeight: 'bold',
  textAlign: 'center' as const,
  color: '#2d3748',
};

const buttonContainer = {
  textAlign: 'center' as const,
  paddingTop: '10px',
};

const button = {
  backgroundColor: '#0088ff',
  borderRadius: '24px',
  color: '#FFF',
  fontWeight: 'bold',
  border: '1px solid rgb(0,0,0, 0.1)',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  padding: '12px 30px',
  textDecoration: 'none',
};

const content = {
  backgroundColor: '#fff',
  border: '1px solid rgb(0,0,0, 0.1)',
  borderRadius: '8px',
  overflow: 'hidden',
  marginBottom: '20px',
};

const boxInfos = {
  padding: '20px',
};

const messageBox = {
  fontSize: 16,
  lineHeight: '24px',
  color: '#2d3748',
  backgroundColor: '#f8fafc',
  padding: '15px',
  borderRadius: '6px',
  marginBottom: '20px',
};

const footer = {
  textAlign: 'center' as const,
  fontSize: 12,
  color: 'rgb(0,0,0, 0.7)',
  padding: '0 20px',
};