import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

type ContactEmailProps = {
  name: string;
  email: string;
  domainLabel: string;
  message: string;
};

export function ContactEmail({
  name,
  email,
  domainLabel,
  message,
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New portfolio contact message from {name}</Preview>
      <Tailwind>
        <Body className="m-0 bg-[#121111] px-[18px] py-8 font-sans text-[#f3eee6]">
          <Container className="mx-auto max-w-[640px]">
            <Section className="overflow-hidden rounded-[28px] border border-solid border-white/10 bg-[#1d1a1a] shadow-xl">
              <div className="h-1 bg-[#d39a54]" />
              <Section className="px-8 pb-[30px] pt-[34px]">
                <Text className="m-0 mb-2.5 text-xs uppercase tracking-[0.22em] text-[#d39a54]">
                  Portfolio contact
                </Text>
                <Heading className="m-0 font-serif text-[28px] font-medium leading-[1.15] text-[#fffaf2]">
                  New message from {name}
                </Heading>

                <Section className="mt-[26px] rounded-[20px] border border-solid border-white/10 bg-[#252121] p-5">
                  <Text className="m-0 mb-3.5 text-[13px] uppercase tracking-[0.1em] text-[#94897d]">
                    Message
                  </Text>
                  <Text className="m-0 whitespace-pre-wrap text-base leading-[1.65] text-[#f3eee6]">
                    {message}
                  </Text>
                </Section>

                <Hr className="mb-3 mt-6 border-white/10" />

                <Section>
                  <Text className="m-0 py-2 text-sm text-[#f3eee6]">
                    <span className="inline-block w-[86px] text-[13px] text-[#94897d]">
                      Name
                    </span>
                    {name}
                  </Text>
                  <Text className="m-0 py-2 text-sm text-[#f3eee6]">
                    <span className="inline-block w-[86px] text-[13px] text-[#94897d]">
                      Email
                    </span>
                    <Link
                      href={`mailto:${email}`}
                      className="text-[#ebb373] no-underline"
                    >
                      {email}
                    </Link>
                  </Text>
                  <Text className="m-0 py-2 text-sm text-[#f3eee6]">
                    <span className="inline-block w-[86px] text-[13px] text-[#94897d]">
                      Topic
                    </span>
                    {domainLabel}
                  </Text>
                </Section>
              </Section>
            </Section>

            <Text className="mx-1 mb-0 mt-[18px] text-xs leading-6 text-[#94897d]">
              Sent from the contact form on your portfolio website.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
