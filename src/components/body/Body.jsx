import React from 'react';
import { Button } from '../button/Button';

export const Body = () => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Лічильник: <span id="counter"></span></h5>
                <Button
                    children='Добавити'
                    className='btn-primary'
                    id='add'
                    onClick={() => { }}
                />
                <Button
                    children='Прибрати'
                    className='btn-danger'
                    id='sub'
                    onClick={() => { }}
                />
                <Button
                    children='Async'
                    className='btn-success'
                    id='async'
                    onClick={() => { }}
                />
            </div>
        </div>
    )
}
