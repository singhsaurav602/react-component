export default function ConceptLists(props) {
  return (
    <li className="concept">
      <img src={props.image} alt="components topic" />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
}
