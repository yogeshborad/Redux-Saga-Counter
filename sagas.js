export function* helloSaga(){
    console.log("Hello Sagas!");
}

const Counter = ({value, onIncrement, OnDecrement, onIncrementAsync}) => 
<div>
    <button onClick = {onIncrementAsync}>
        Incerement after 1 second
    </button>
</div>
