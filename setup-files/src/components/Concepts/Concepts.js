import "./Concepts.css";
import ConceptLists from "./ConceptLists";

export default function Concepts(props) {
  console.log(props);
  return (
    <div>
      <ul id="concepts">
        <ConceptLists
          image={props.concept[0].image}
          title={props.concept[0].title}
          description={props.concept[0].description}
        />

        <ConceptLists
          image={props.concept[1].image}
          title={props.concept[1].title}
          description={props.concept[1].description}
        />

        <ConceptLists
          image={props.concept[2].image}
          title={props.concept[2].title}
          description={props.concept[2].description}
        />
      </ul>
    </div>
  );
}
