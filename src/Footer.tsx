import { Button, styled, Typography } from "@mui/material";
import { useIntl } from "react-intl";

const FOOTER_HEIGHT = 30;
const FOOTER_TEXT = `Copyright ©${new Date().getFullYear()} Patogh e.V.`;

export default function Footer() {
  const intl = useIntl();

  return (
    <FooterWrapper>
      <FooterText color="textSecondary">{FOOTER_TEXT}</FooterText>
      <Button size="small" href={"/impressum"}>
        {intl.formatMessage({ id: "impressum" })}
      </Button>
    </FooterWrapper>
  );
}

const FooterWrapper = styled("div")(
  ({ theme }) => `
    flex: 1;
    display: flex;
    justify-content: left;
    minHeight: ${FOOTER_HEIGHT};
    padding: 5px;
    padding-left: 10px;
`
);

const FooterText = styled(Typography)`
  word-spacing: 0.1rem;
  padding-right: 20px;
`;
