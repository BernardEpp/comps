import Table from "../components/Table";

function TablePage() {

    const config = [
        {
            label: "Fruits", 
            render: (fruit) => fruit.name
        },
        {
            label: "Color", 
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />
        },
        {
            label: "Score", 
            render: (fruit) => fruit.score
        },
    ]

    const data = [
        { name: "Orange", color: "bg-orange-500", score: 5},
        { name: "Apple", color: "bg-red-500", score: 3},
        { name: "Banan", color: "bg-yellow-500", score: 1},
        { name: "Lime", color: "bg-green-500", score: 4},
    ]

    const keyFn = (fruit) => {
        return fruit.name;
    } 

    return (
        <div>
            <Table data={data} config={config} keyFn={keyFn} />
        </div>
    );
}

export default TablePage;