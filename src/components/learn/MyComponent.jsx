// component = html + css + js
// JSX

import './style.css'
const MyComponent = () => {
    return (
        <>
            <div className="">lehai & lehai update 12</div> {/*hello */}
            <div className="child"
                style={
                    { borderRadius: "10px" }
                }
            >child</div>
        </>
    );
}

export default MyComponent