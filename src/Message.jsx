import SeccondMessage from "./SeccondMessage";

export default function Message(props) {
    return (
        <>
    <SeccondMessage {...props} />
        {props.children}
    </>
    );
}