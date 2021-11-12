import React from "react";
import Badge from 'react-bootstrap/Badge'
import "./Badge.css"

export const Badges = ({ variant, label }) => {
let getCssClass = () => {
if (variant === "White background without border") {
return "variant1"
} else if (variant === "Cyan Background") {
return "variant2"
} else if (variant === "Gray Background") {
return "variant3"
} else if (variant === "White background with border") {
return "variant4"
} else {
return ""
}

}
return (
<>
<div>
<Badge pill className={getCssClass()}>
{label}
</Badge>
</div>
</>
)
}