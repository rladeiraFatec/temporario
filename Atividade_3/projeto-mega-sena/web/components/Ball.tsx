interface BallProps {
    numero: string;
}

const ballStyle = {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#00b4a0",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    fontWeight: "bold",
    margin: "6px",
    boxShadow: "0 2px 8px rgba(0, 180, 160, 0.5)",
};

export default function Ball({ numero }: BallProps) {
    return <div style={ballStyle}>{numero}</div>;
}
