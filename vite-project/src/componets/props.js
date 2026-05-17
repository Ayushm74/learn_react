function UserCard(){
    return(
        <div style={{
            border: "1px solid black",
            padding: "10px",
      margin: "10px",
      width: "200px"
        }}

        <h2>{props.name}</h2>
        <p>Age: {props.age}</p>
        <p>City: {props.city}</p>
        </div>
    )
}

export default function App(){
    return(
        <div>
        <userCard name="Ayush" age={20} city="Nagpur"/
        </div>
    )
}