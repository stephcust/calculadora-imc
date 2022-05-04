export default function Resultado(props) {
    return (
      <div>
        <p>Resultado: {props.res.toFixed(1)}</p>
      </div>
    )
}