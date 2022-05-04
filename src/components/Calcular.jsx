export default function Calcular (props) {

    const calc=()=>{
      props.setRes(props.peso / (props.alt * props.alt));
    }
    return (
      <div>
        <button onClick={calc}>Calcular</button>
      </div>
    )
}