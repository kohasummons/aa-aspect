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
  company: string;
  email: string;
  phone?: string;
  projectLocation?: string;
  projectType: string;
  supportRequired: string[];
  timeline?: string;
  description?: string;
}

export const ContactFormEmail = ({
  name,
  company,
  email,
  phone,
  projectLocation,
  projectType,
  supportRequired,
  timeline,
  description,
}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>New project support request from {name} at {company}</Preview>
        <Container>
          <Section style={logo}>
            <div style={logoContainer}>
              <span style={logoText}>AA-Aspect</span>
            </div>
          </Section>

          <Section style={content}>
            <Row style={{ ...boxInfos, paddingBottom: '0' }}>
              <Column>
                <Heading style={heading}>
                  New Project Support Request
                </Heading>

                <Text style={{ ...paragraph, marginTop: 20 }}>
                  <b>Name: </b>{name}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Company: </b>{company}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Email: </b>{email}
                </Text>
                {phone && (
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Phone: </b>{phone}
                  </Text>
                )}
                {projectLocation && (
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Project Location: </b>{projectLocation}
                  </Text>
                )}
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Project Type: </b>{projectType}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Support Required: </b>{supportRequired.join(', ')}
                </Text>
                {timeline && (
                  <Text style={{ ...paragraph, marginTop: -5 }}>
                    <b>Timeline / Urgency: </b>{timeline}
                  </Text>
                )}
                {description && (
                  <>
                    <Text style={{ ...paragraph, marginTop: 10 }}>
                      <b>Project Description:</b>
                    </Text>
                    <Text style={messageBox}>{description}</Text>
                  </>
                )}
              </Column>
            </Row>

            <Row style={{ ...boxInfos, paddingTop: '0' }}>
              <Column style={buttonContainer}>
                <Button style={button} href="https://aa-aspect.com">
                  Visit Website
                </Button>
              </Column>
            </Row>
          </Section>

          <Text style={footer}>
            © {new Date().getFullYear()} | AA-Aspect, 50 Princess St., Ipswich IP1 1RJ, United Kingdom | www.aa-aspect.com
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

ContactFormEmail.PreviewProps = {
  name: 'John Doe',
  company: 'Acme Construction',
  email: 'john@example.com',
  phone: '+44 7700 900000',
  projectLocation: 'Dublin, Ireland',
  projectType: 'Data Centre',
  supportRequired: ['QA/QC Support', 'Test Pack Management'],
  timeline: 'Q2 2026',
  description: 'We need documentation support for a new data centre cooling infrastructure project.',
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
  fontSize: 28,
  fontWeight: 'bold',
  textAlign: 'center' as const,
  color: '#2d3748',
};

const buttonContainer = {
  textAlign: 'center' as const,
  paddingTop: '10px',
};

const button = {
  backgroundColor: '#003840',
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
