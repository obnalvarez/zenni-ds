import React from "react";
import { Alert, Button } from "react-bootstrap"
export const Alerts = ({ color, label, Link, header, title, URL, variant,
additionalContent, Paragraph1, Paragraph2, closeButton, buttonTitle,
dismissible, ...props }) => {
const getcolor = () => {
switch (variant) {
case "primary": return "#007B8F";
case "secondary": return "#B2E0E5";
case "success": return "#E6F3EA";
case "warning": return "#FFEEE9";
case "danger": return "#FCE6E6";
case "light": return "#FAFAFA";
case "dark": return "#666666";
default: return "#007B8F"
}
}
const getTextColor = () => {
switch (variant) {
case "primary": return "#FFFFFF";
case "secondary": return "#03424C";
case "success": return "#004115";
case "warning": return "#802C10";
case "danger": return "#730000";
case "light": return "#333333";
case "dark": return "#FFFFFF";
default: return "#FFFFFF"
}
}
return (
<>
<Alert variant={variant} style={{ backgroundColor:

`${getcolor()}`, color: `${getTextColor()}` }} dismissible={dismissible}>
{header && title && <Alert.Heading>{title}</Alert.Heading>}
{!additionalContent && <>{label}{' '}
{Link && URL && <Alert.Link href="#" style={{
textDecorationLine: "underline", color: `${getTextColor()}` }}>an example
link</Alert.Link>}
</>}
{additionalContent &&
<>
<p>
{Paragraph1}

</p>
<p className="mb-0 mt-1">
{Paragraph2}
</p>
</>
}
{closeButton &&
<div className="d-flex justify-content-end">
<Button onClick={() => { }} variant="outline-dark"
style={{ backgroundColor: `${getcolor()}`, color:

`${getTextColor()}`, border: `1px solid ${getTextColor()}` }}>

{buttonTitle}
</Button>
</div>
}
</Alert>
</>
)
}