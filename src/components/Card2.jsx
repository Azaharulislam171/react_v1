import styles from "./Card2.module.css";

function Card2(props){

return(
    <div className={styles.card_container}>
        <img src= {props.img_src} alt={props.alt} />
        <p> Name: {props.name} </p>
        <p> Descreiption: {props.class} </p>
        <p> Exam: {props.exam} </p>
        <p className={styles.grade_font}> Price:$ {props.grade} </p>
        <button> Add Grade </button>
    </div>
);
}

export default Card2;