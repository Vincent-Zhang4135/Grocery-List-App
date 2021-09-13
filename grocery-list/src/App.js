import React, { useState, useEffect } from "react";
import List from "./List";

function App() {
    const [name, setName] = useState("");
    const [list, setList] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            const newItem = {
                id: new Date().getTime().toString(),
                title: name,
            };
            setList([...list, newItem]);
            setName("");
        }
    };

    const removeItem = (id) => {
        setList(list.filter((item) => item.id !== id));
    };

    return (
        <>
            <section className="section-center">
                <form className="grocery-form" onSubmit={handleSubmit}>
                    <h3>Grocery List</h3>
                    <div className="form-control">
                        <input
                            type="text"
                            className="grocery"
                            placeholder="enter an item"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                        />
                        <button type="submit" className="submit-btn">
                            submit
                        </button>
                    </div>
                </form>
                {list.length > 0 && (
                    <div className="grocery-container">
                        <List items={list} removeItem={removeItem} />
                        <button
                            className="clear-btn"
                            onClick={() => {
                                setList([]);
                            }}
                        >
                            clear items
                        </button>
                    </div>
                )}
            </section>
        </>
    );
}

export default App;
