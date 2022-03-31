import React from "react";

const List = ({ items, removeItem }) => {
    return (
        <div className="grocery=list">
            {items.map((item) => {
                const { id, title } = item;
                return (
                    <article key={id} className="grocery-item">
                        <p className="title">{title}</p>
                        <div className="btn-container-">
                            <button
                                type="button"
                                className="delete-btn"
                                onClick={() => removeItem(id)}
                            >
                                delete
                            </button>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default List;
