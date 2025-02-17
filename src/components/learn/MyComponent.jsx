// component = html + css + js
// JSX

import './style.css'
const MyComponent = () => {
    const hoidanit = [1, 2, 3]

    return (
        <>
            <div> {JSON.stringify(hoidanit)} & lehai & lehai update 12</div> {/*hello */}
            <div>{console.log("Eric")}</div>
            <div className="child"
                style={
                    {
                        borderRadius: "10px",
                    }
                }
            >child</div>
        </>
    );
}

export default MyComponent