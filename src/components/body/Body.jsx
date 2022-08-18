import React, { useState } from 'react';
import { Button } from '../button/Button';

export const Body = () => {
    const [count, setCount] = useState(0);

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Лічильник: <span id="counter">{count}</span></h5>
                <Button
                    children='Добавити'
                    className='btn-primary'
                    id='add'
                    onClick={() => setCount(count + 1)}
                />
                <Button
                    children='Прибрати'
                    className='btn-danger'
                    id='sub'
                    onClick={() => setCount(count - 1)}
                />
                <Button
                    children='Async'
                    className='btn-success'
                    id='async'
                    onClick={() => {
                        setTimeout(() => {
                            setCount(count + 1)
                        }, 2000)
                    }}
                />
            </div>
        </div>
    )
}
